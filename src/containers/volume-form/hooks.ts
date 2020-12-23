import { useCreateVolumeMutation, useUpdateVolumeMutation, useVolumeModalQuery } from '../../typescript/graphql.types';
import { volumeFormState } from '../../graphql/index.graphql';
import { message } from 'antd';

export function useNovelForm() {
  const { data } = useVolumeModalQuery();
  const volumeFormStatus = data?.volumeForm || volumeFormState();
  const [createVolume, { loading: creating }] = useCreateVolumeMutation({
    onCompleted: (data) => {
      const result = data!.createVolume!;
      if (result.__typename === 'Novel') {
        volumeFormState({ open: false });
        message.success('Volume created successfully !');
      } else message.error(result.message);
    }
  });
  const [updateVolume, { loading: updating }] = useUpdateVolumeMutation({
    onCompleted: (data) => {
      const result = data!.updateVolume!;
      if (result.__typename === 'Novel') {
        volumeFormState({ open: false });
        message.success('Volume updated successfully !');
      } else message.error(result.message);
    }
  });

  function handleSubmit(nid: string, name?: string) {
    if (volumeFormStatus.vid) updateVolume({ variables: { nid, name, vid: volumeFormStatus.vid } });
    else createVolume({ variables: { nid, volume: { name } } });
  }

  return { loading: creating || updating, handleSubmit, open: volumeFormStatus.open, isNew: volumeFormStatus.vid ? false : true, name: volumeFormStatus.name };
}
