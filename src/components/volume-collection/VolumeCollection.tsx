/**
 * Importing npm packages.
 */
import React, { useState } from 'react';

/**
 * Importing npm design components.
 */
import { Collapse } from 'antd';

/**
 * Importing user defined components.
 */
import VolumeGrid from './VolumeGrid';
import VolumeList from './VolumeList';

/**
 *  Importing user defined modules.
 */

/**
 * Importing styled components.
 */

/**
 * Importing types.
 */
import { ChapterInfo } from '../../typescript/common';

interface Volume {
  vid: string;
  name?: string | null;
  chapters: {
    entries: ChapterInfo[];
  };
}

interface IVolumeCollectionCommonProps {
  volumes: Volume[];
  removeEmpty: boolean;
}

interface IVolumeListCollection extends IVolumeCollectionCommonProps {
  type: 'list';
  title: string;
}

interface IVolumeGridCollection extends IVolumeCollectionCommonProps {
  type: 'grid';
  cols: number;
}

type IVolumeCollectionProps = IVolumeListCollection | IVolumeGridCollection;

function VolumeCollection(props: IVolumeCollectionProps) {
  const [panel, setPanel] = useState<string>(props.volumes[0].vid);
  const handlePanelChange = (key: string | string[]) => setPanel(Array.isArray(key) ? key[0] : key);

  return (
    <Collapse onChange={handlePanelChange} activeKey={panel} accordion>
      {props.volumes.map((volume, index) =>
        volume.chapters.entries.length > 0 || !props.removeEmpty ? (
          <Collapse.Panel key={volume.vid} header={`Volume ${index + 1} ${volume.name ? ' : ' + volume.name : ''}`}>
            {props.type === 'list' ? <VolumeList title={props.title} chapters={volume.chapters.entries} /> : <VolumeGrid cols={2} chapters={volume.chapters.entries} />}
          </Collapse.Panel>
        ) : null
      )}
    </Collapse>
  );
}

VolumeCollection.defaultProps = {
  removeEmpty: false
};

export default VolumeCollection;
