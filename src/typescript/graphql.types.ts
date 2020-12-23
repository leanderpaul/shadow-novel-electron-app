import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export enum Role {
  User = 'USER',
  NovelAdmin = 'NOVEL_ADMIN'
}

export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Operation = {
  __typename: 'Operation';
  status: Scalars['Boolean'];
  msg: Scalars['String'];
};

export type Error = {
  __typename: 'Error';
  message?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename: 'Query';
  authenticated: Scalars['Boolean'];
  novel?: Maybe<Novel>;
  novels?: Maybe<NovelPagination>;
  status: Scalars['Boolean'];
  user?: Maybe<UserOrError>;
  volumeForm: VolumeForm;
};


export type QueryNovelArgs = {
  nid: Scalars['ID'];
};


export type QueryNovelsArgs = {
  filter?: Maybe<NovelFilter>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<NovelSort>;
};


export enum GenreEnum {
  ContemporaryRomance = 'CONTEMPORARY_ROMANCE',
  Fantasy = 'FANTASY',
  FantasyRomance = 'FANTASY_ROMANCE',
  MagicalRealism = 'MAGICAL_REALISM',
  SciFi = 'SCI__FI',
  Xianxia = 'XIANXIA'
}

export enum TagEnum {
  Action = 'ACTION',
  Adult = 'ADULT',
  Adventure = 'ADVENTURE',
  Comedy = 'COMEDY',
  Drama = 'DRAMA',
  Ecchi = 'ECCHI',
  Fantasy = 'FANTASY',
  FemaleProtagonist = 'FEMALE_PROTAGONIST',
  GenderBender = 'GENDER_BENDER',
  Harem = 'HAREM',
  Historical = 'HISTORICAL',
  Horror = 'HORROR',
  Josei = 'JOSEI',
  MaleProtagonist = 'MALE_PROTAGONIST',
  MartialArts = 'MARTIAL_ARTS',
  Mature = 'MATURE',
  Mecha = 'MECHA',
  Mystery = 'MYSTERY',
  Psychological = 'PSYCHOLOGICAL',
  Romance = 'ROMANCE',
  R_18 = 'R__18',
  SchoolLife = 'SCHOOL_LIFE',
  SciFi = 'SCI__FI',
  Seinen = 'SEINEN',
  Shoujo = 'SHOUJO',
  ShoujoAi = 'SHOUJO_AI',
  Shounen = 'SHOUNEN',
  ShounenAi = 'SHOUNEN_AI',
  SliceOfLife = 'SLICE_OF_LIFE',
  Smut = 'SMUT',
  Sports = 'SPORTS',
  Supernatural = 'SUPERNATURAL',
  Tragedy = 'TRAGEDY',
  Wuxia = 'WUXIA',
  Xianxia = 'XIANXIA',
  Xuanhuan = 'XUANHUAN',
  Yaoi = 'YAOI',
  Yuri = 'YURI'
}

export type Mutation = {
  __typename: 'Mutation';
  login?: Maybe<UserOrError>;
  register?: Maybe<UserOrError>;
  verifyUser?: Maybe<UserOrError>;
  createNovel?: Maybe<NovelOrError>;
  createVolume?: Maybe<NovelOrError>;
  createChapter?: Maybe<ChapterOrError>;
  updateNovel?: Maybe<NovelOrError>;
  updateVolume?: Maybe<NovelOrError>;
  updateChapter?: Maybe<ChapterOrError>;
  deleteNovel?: Maybe<Operation>;
  deleteVolume?: Maybe<NovelOrError>;
  deleteChapter?: Maybe<NovelOrError>;
};


export type MutationLoginArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRegisterArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
};


export type MutationVerifyUserArgs = {
  token: Scalars['String'];
};


export type MutationCreateNovelArgs = {
  novel: NovelInput;
};


export type MutationCreateVolumeArgs = {
  nid: Scalars['ID'];
  volume?: Maybe<VolumeInput>;
};


export type MutationCreateChapterArgs = {
  nid: Scalars['ID'];
  vid: Scalars['ID'];
  chapter: ChapterInput;
};


export type MutationUpdateNovelArgs = {
  nid: Scalars['ID'];
  update: NovelInput;
};


export type MutationUpdateVolumeArgs = {
  nid: Scalars['ID'];
  vid: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};


export type MutationUpdateChapterArgs = {
  nid: Scalars['ID'];
  cid: Scalars['ID'];
  update: ChapterInput;
};


export type MutationDeleteNovelArgs = {
  nid: Scalars['ID'];
};


export type MutationDeleteVolumeArgs = {
  nid: Scalars['ID'];
  vid: Scalars['ID'];
};


export type MutationDeleteChapterArgs = {
  nid: Scalars['ID'];
  cid: Scalars['ID'];
};

export type UserOrError = User | Error;

export type User = {
  __typename: 'User';
  uid: Scalars['ID'];
  username: Scalars['String'];
  token: Scalars['String'];
  novels: NovelPagination;
};


export type UserNovelsArgs = {
  title?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<NovelSort>;
};

export type NovelPagination = {
  __typename: 'NovelPagination';
  entries: Array<Novel>;
  hasNext: Scalars['Boolean'];
  hasPrev: Scalars['Boolean'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  totalCount: Scalars['Int'];
};

export type ChapterPagination = {
  __typename: 'ChapterPagination';
  entries: Array<Chapter>;
  offset: Scalars['Int'];
  limit?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Novel = {
  __typename: 'Novel';
  nid: Scalars['ID'];
  cover?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  author: Scalars['String'];
  desc: Scalars['String'];
  status: StatusEnum;
  genre: GenreEnum;
  tags: Array<TagEnum>;
  views: Scalars['Int'];
  volumes: Array<Volume>;
  createdAt: Scalars['Date'];
  chapter?: Maybe<Chapter>;
  chapters: ChapterPagination;
};


export type NovelChapterArgs = {
  cid: Scalars['ID'];
};


export type NovelChaptersArgs = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sortDirection?: Maybe<SortDirection>;
};

export type Volume = {
  __typename: 'Volume';
  vid: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  chapters: ChapterPagination;
};


export type VolumeChaptersArgs = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sortDirection?: Maybe<SortDirection>;
};

export type Chapter = {
  __typename: 'Chapter';
  cid: Scalars['ID'];
  nid: Scalars['ID'];
  vid: Scalars['ID'];
  index: Scalars['Int'];
  title: Scalars['String'];
  content: Scalars['String'];
  matureContent: Scalars['Boolean'];
  createdAt: Scalars['Date'];
};

export type NovelOrError = Novel | Error;

export type ChapterOrError = Chapter | Error;

export type NovelFilter = {
  title?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  status?: Maybe<StatusEnum>;
  genre?: Maybe<GenreEnum>;
};

export type NovelSort = {
  field: NovelSortBy;
  order: SortDirection;
};

export type NovelInput = {
  cover?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  desc: Scalars['String'];
  status: StatusEnum;
  genre: GenreEnum;
  tags: Array<TagEnum>;
};

export type ChapterInput = {
  title: Scalars['String'];
  content: Scalars['String'];
  matureContent: Scalars['Boolean'];
};

export type VolumeInput = {
  name?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
};

export enum NovelSortBy {
  Title = 'TITLE',
  Views = 'VIEWS',
  CreatedAt = 'CREATED_AT',
  ChapterCount = 'CHAPTER_COUNT'
}

export enum StatusEnum {
  Completed = 'COMPLETED',
  Ongoing = 'ONGOING'
}

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type VolumeForm = {
  __typename: 'VolumeForm';
  open: Scalars['Boolean'];
  vid?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ErrorFragmentFragment = (
  { __typename: 'Error' }
  & Pick<Error, 'code' | 'message'>
);

export type UserFragmentFragment = (
  { __typename: 'User' }
  & Pick<User, 'username' | 'token'>
);

export type NovelBriefFragmentFragment = (
  { __typename: 'Novel' }
  & Pick<Novel, 'nid' | 'cover' | 'title' | 'author' | 'desc' | 'genre'>
);

export type NovelDetailFragmentFragment = (
  { __typename: 'Novel' }
  & Pick<Novel, 'nid' | 'cover' | 'title' | 'author' | 'desc' | 'genre' | 'status' | 'tags' | 'views' | 'createdAt'>
  & { volumes: Array<(
    { __typename: 'Volume' }
    & Pick<Volume, 'vid' | 'name'>
    & { chapters: (
      { __typename: 'ChapterPagination' }
      & { entries: Array<(
        { __typename: 'Chapter' }
        & Pick<Chapter, 'cid' | 'title' | 'index' | 'createdAt'>
      )> }
    ) }
  )>, chapters: (
    { __typename: 'ChapterPagination' }
    & Pick<ChapterPagination, 'totalCount'>
  ) }
);

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { login?: Maybe<(
    { __typename: 'User' }
    & UserFragmentFragment
  ) | (
    { __typename: 'Error' }
    & ErrorFragmentFragment
  )> };

export type RegisterMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = { register?: Maybe<(
    { __typename: 'User' }
    & UserFragmentFragment
  ) | (
    { __typename: 'Error' }
    & ErrorFragmentFragment
  )> };

export type CreateNovelMutationVariables = Exact<{
  novel: NovelInput;
}>;


export type CreateNovelMutation = { createNovel?: Maybe<(
    { __typename: 'Novel' }
    & NovelBriefFragmentFragment
  ) | (
    { __typename: 'Error' }
    & ErrorFragmentFragment
  )> };

export type CreateVolumeMutationVariables = Exact<{
  nid: Scalars['ID'];
  volume: VolumeInput;
}>;


export type CreateVolumeMutation = { createVolume?: Maybe<(
    { __typename: 'Novel' }
    & NovelDetailFragmentFragment
  ) | (
    { __typename: 'Error' }
    & ErrorFragmentFragment
  )> };

export type CreateChapterMutationVariables = Exact<{
  nid: Scalars['ID'];
  vid: Scalars['ID'];
  chapter: ChapterInput;
}>;


export type CreateChapterMutation = { createChapter?: Maybe<(
    { __typename: 'Chapter' }
    & Pick<Chapter, 'nid' | 'cid'>
  ) | (
    { __typename: 'Error' }
    & ErrorFragmentFragment
  )> };

export type UpdateNovelMutationVariables = Exact<{
  nid: Scalars['ID'];
  update: NovelInput;
}>;


export type UpdateNovelMutation = { updateNovel?: Maybe<(
    { __typename: 'Novel' }
    & NovelDetailFragmentFragment
  ) | (
    { __typename: 'Error' }
    & ErrorFragmentFragment
  )> };

export type UpdateVolumeMutationVariables = Exact<{
  nid: Scalars['ID'];
  vid: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
}>;


export type UpdateVolumeMutation = { updateVolume?: Maybe<(
    { __typename: 'Novel' }
    & NovelDetailFragmentFragment
  ) | (
    { __typename: 'Error' }
    & ErrorFragmentFragment
  )> };

export type UpdateChapterMutationVariables = Exact<{
  nid: Scalars['ID'];
  cid: Scalars['ID'];
  update: ChapterInput;
}>;


export type UpdateChapterMutation = { updateChapter?: Maybe<(
    { __typename: 'Chapter' }
    & Pick<Chapter, 'cid' | 'nid'>
  ) | (
    { __typename: 'Error' }
    & ErrorFragmentFragment
  )> };

export type DeleteNovelMutationVariables = Exact<{
  nid: Scalars['ID'];
}>;


export type DeleteNovelMutation = { deleteNovel?: Maybe<(
    { __typename: 'Operation' }
    & Pick<Operation, 'status' | 'msg'>
  )> };

export type DeleteVolumeMutationVariables = Exact<{
  nid: Scalars['ID'];
  vid: Scalars['ID'];
}>;


export type DeleteVolumeMutation = { deleteVolume?: Maybe<(
    { __typename: 'Novel' }
    & NovelDetailFragmentFragment
  ) | (
    { __typename: 'Error' }
    & ErrorFragmentFragment
  )> };

export type DeleteChapterMutationVariables = Exact<{
  nid: Scalars['ID'];
  cid: Scalars['ID'];
}>;


export type DeleteChapterMutation = { deleteChapter?: Maybe<(
    { __typename: 'Novel' }
    & NovelDetailFragmentFragment
  ) | (
    { __typename: 'Error' }
    & ErrorFragmentFragment
  )> };

export type AuthQueryVariables = Exact<{ [key: string]: never; }>;


export type AuthQuery = Pick<Query, 'authenticated'>;

export type VolumeModalQueryVariables = Exact<{ [key: string]: never; }>;


export type VolumeModalQuery = { volumeForm: (
    { __typename: 'VolumeForm' }
    & Pick<VolumeForm, 'open' | 'vid' | 'name'>
  ) };

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { user?: Maybe<(
    { __typename: 'User' }
    & Pick<User, 'username' | 'token'>
  ) | (
    { __typename: 'Error' }
    & ErrorFragmentFragment
  )> };

export type ServerQueryVariables = Exact<{ [key: string]: never; }>;


export type ServerQuery = Pick<Query, 'status'>;

export type NovelListQueryVariables = Exact<{
  filter?: Maybe<NovelFilter>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<NovelSort>;
}>;


export type NovelListQuery = { novels?: Maybe<(
    { __typename: 'NovelPagination' }
    & Pick<NovelPagination, 'offset' | 'limit' | 'totalCount'>
    & { entries: Array<(
      { __typename: 'Novel' }
      & NovelBriefFragmentFragment
    )> }
  )> };

export type MyNovelsQueryVariables = Exact<{ [key: string]: never; }>;


export type MyNovelsQuery = { user?: Maybe<(
    { __typename: 'User' }
    & { novels: (
      { __typename: 'NovelPagination' }
      & Pick<NovelPagination, 'offset' | 'limit' | 'totalCount' | 'hasNext' | 'hasPrev'>
      & { entries: Array<(
        { __typename: 'Novel' }
        & Pick<Novel, 'nid' | 'cover' | 'title' | 'views'>
        & { chapters: (
          { __typename: 'ChapterPagination' }
          & Pick<ChapterPagination, 'totalCount'>
          & { entries: Array<(
            { __typename: 'Chapter' }
            & Pick<Chapter, 'cid' | 'index' | 'title'>
          )> }
        ) }
      )> }
    ) }
  ) | (
    { __typename: 'Error' }
    & ErrorFragmentFragment
  )> };

export type NovelDetailsQueryVariables = Exact<{
  nid: Scalars['ID'];
}>;


export type NovelDetailsQuery = { novel?: Maybe<(
    { __typename: 'Novel' }
    & NovelDetailFragmentFragment
  )> };

export type NovelInfoQueryVariables = Exact<{
  nid: Scalars['ID'];
}>;


export type NovelInfoQuery = { novel?: Maybe<(
    { __typename: 'Novel' }
    & Pick<Novel, 'nid' | 'cover' | 'title' | 'desc' | 'status' | 'genre' | 'tags'>
  )> };

export type ChapterInfoQueryVariables = Exact<{
  nid: Scalars['ID'];
  cid: Scalars['ID'];
}>;


export type ChapterInfoQuery = { novel?: Maybe<(
    { __typename: 'Novel' }
    & Pick<Novel, 'nid'>
    & { chapter?: Maybe<(
      { __typename: 'Chapter' }
      & Pick<Chapter, 'cid' | 'title' | 'content' | 'matureContent'>
    )> }
  )> };

export type VolumeInfoQueryVariables = Exact<{
  nid: Scalars['ID'];
}>;


export type VolumeInfoQuery = { novel?: Maybe<(
    { __typename: 'Novel' }
    & Pick<Novel, 'nid'>
    & { volumes: Array<(
      { __typename: 'Volume' }
      & Pick<Volume, 'vid' | 'name'>
    )> }
  )> };

export type ChapterDetailsQueryVariables = Exact<{
  nid: Scalars['ID'];
  cid: Scalars['ID'];
}>;


export type ChapterDetailsQuery = { novel?: Maybe<(
    { __typename: 'Novel' }
    & Pick<Novel, 'nid' | 'title'>
    & { chapter?: Maybe<(
      { __typename: 'Chapter' }
      & Pick<Chapter, 'cid' | 'index' | 'title' | 'content'>
    )> }
  )> };

export const ErrorFragmentFragmentDoc = gql`
    fragment ErrorFragment on Error {
  code
  message
}
    `;
export const UserFragmentFragmentDoc = gql`
    fragment UserFragment on User {
  username
  token
}
    `;
export const NovelBriefFragmentFragmentDoc = gql`
    fragment NovelBriefFragment on Novel {
  nid
  cover
  title
  author
  desc
  genre
}
    `;
export const NovelDetailFragmentFragmentDoc = gql`
    fragment NovelDetailFragment on Novel {
  nid
  cover
  title
  author
  desc
  genre
  status
  tags
  views
  volumes {
    vid
    name
    chapters {
      entries {
        cid
        title
        index
        createdAt
      }
    }
  }
  chapters {
    totalCount
  }
  createdAt
}
    `;
export const LoginDocument = gql`
    mutation login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    ...UserFragment
    ...ErrorFragment
  }
}
    ${UserFragmentFragmentDoc}
${ErrorFragmentFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation register($username: String!, $password: String!) {
  register(username: $username, password: $password) {
    ...UserFragment
    ...ErrorFragment
  }
}
    ${UserFragmentFragmentDoc}
${ErrorFragmentFragmentDoc}`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const CreateNovelDocument = gql`
    mutation createNovel($novel: NovelInput!) {
  createNovel(novel: $novel) {
    ...NovelBriefFragment
    ...ErrorFragment
  }
}
    ${NovelBriefFragmentFragmentDoc}
${ErrorFragmentFragmentDoc}`;
export type CreateNovelMutationFn = Apollo.MutationFunction<CreateNovelMutation, CreateNovelMutationVariables>;

/**
 * __useCreateNovelMutation__
 *
 * To run a mutation, you first call `useCreateNovelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNovelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNovelMutation, { data, loading, error }] = useCreateNovelMutation({
 *   variables: {
 *      novel: // value for 'novel'
 *   },
 * });
 */
export function useCreateNovelMutation(baseOptions?: Apollo.MutationHookOptions<CreateNovelMutation, CreateNovelMutationVariables>) {
        return Apollo.useMutation<CreateNovelMutation, CreateNovelMutationVariables>(CreateNovelDocument, baseOptions);
      }
export type CreateNovelMutationHookResult = ReturnType<typeof useCreateNovelMutation>;
export type CreateNovelMutationResult = Apollo.MutationResult<CreateNovelMutation>;
export type CreateNovelMutationOptions = Apollo.BaseMutationOptions<CreateNovelMutation, CreateNovelMutationVariables>;
export const CreateVolumeDocument = gql`
    mutation createVolume($nid: ID!, $volume: VolumeInput!) {
  createVolume(nid: $nid, volume: $volume) {
    ...NovelDetailFragment
    ...ErrorFragment
  }
}
    ${NovelDetailFragmentFragmentDoc}
${ErrorFragmentFragmentDoc}`;
export type CreateVolumeMutationFn = Apollo.MutationFunction<CreateVolumeMutation, CreateVolumeMutationVariables>;

/**
 * __useCreateVolumeMutation__
 *
 * To run a mutation, you first call `useCreateVolumeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateVolumeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createVolumeMutation, { data, loading, error }] = useCreateVolumeMutation({
 *   variables: {
 *      nid: // value for 'nid'
 *      volume: // value for 'volume'
 *   },
 * });
 */
export function useCreateVolumeMutation(baseOptions?: Apollo.MutationHookOptions<CreateVolumeMutation, CreateVolumeMutationVariables>) {
        return Apollo.useMutation<CreateVolumeMutation, CreateVolumeMutationVariables>(CreateVolumeDocument, baseOptions);
      }
export type CreateVolumeMutationHookResult = ReturnType<typeof useCreateVolumeMutation>;
export type CreateVolumeMutationResult = Apollo.MutationResult<CreateVolumeMutation>;
export type CreateVolumeMutationOptions = Apollo.BaseMutationOptions<CreateVolumeMutation, CreateVolumeMutationVariables>;
export const CreateChapterDocument = gql`
    mutation createChapter($nid: ID!, $vid: ID!, $chapter: ChapterInput!) {
  createChapter(nid: $nid, vid: $vid, chapter: $chapter) {
    ... on Chapter {
      nid
      cid
    }
    ...ErrorFragment
  }
}
    ${ErrorFragmentFragmentDoc}`;
export type CreateChapterMutationFn = Apollo.MutationFunction<CreateChapterMutation, CreateChapterMutationVariables>;

/**
 * __useCreateChapterMutation__
 *
 * To run a mutation, you first call `useCreateChapterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateChapterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createChapterMutation, { data, loading, error }] = useCreateChapterMutation({
 *   variables: {
 *      nid: // value for 'nid'
 *      vid: // value for 'vid'
 *      chapter: // value for 'chapter'
 *   },
 * });
 */
export function useCreateChapterMutation(baseOptions?: Apollo.MutationHookOptions<CreateChapterMutation, CreateChapterMutationVariables>) {
        return Apollo.useMutation<CreateChapterMutation, CreateChapterMutationVariables>(CreateChapterDocument, baseOptions);
      }
export type CreateChapterMutationHookResult = ReturnType<typeof useCreateChapterMutation>;
export type CreateChapterMutationResult = Apollo.MutationResult<CreateChapterMutation>;
export type CreateChapterMutationOptions = Apollo.BaseMutationOptions<CreateChapterMutation, CreateChapterMutationVariables>;
export const UpdateNovelDocument = gql`
    mutation updateNovel($nid: ID!, $update: NovelInput!) {
  updateNovel(nid: $nid, update: $update) {
    ...NovelDetailFragment
    ...ErrorFragment
  }
}
    ${NovelDetailFragmentFragmentDoc}
${ErrorFragmentFragmentDoc}`;
export type UpdateNovelMutationFn = Apollo.MutationFunction<UpdateNovelMutation, UpdateNovelMutationVariables>;

/**
 * __useUpdateNovelMutation__
 *
 * To run a mutation, you first call `useUpdateNovelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateNovelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateNovelMutation, { data, loading, error }] = useUpdateNovelMutation({
 *   variables: {
 *      nid: // value for 'nid'
 *      update: // value for 'update'
 *   },
 * });
 */
export function useUpdateNovelMutation(baseOptions?: Apollo.MutationHookOptions<UpdateNovelMutation, UpdateNovelMutationVariables>) {
        return Apollo.useMutation<UpdateNovelMutation, UpdateNovelMutationVariables>(UpdateNovelDocument, baseOptions);
      }
export type UpdateNovelMutationHookResult = ReturnType<typeof useUpdateNovelMutation>;
export type UpdateNovelMutationResult = Apollo.MutationResult<UpdateNovelMutation>;
export type UpdateNovelMutationOptions = Apollo.BaseMutationOptions<UpdateNovelMutation, UpdateNovelMutationVariables>;
export const UpdateVolumeDocument = gql`
    mutation updateVolume($nid: ID!, $vid: ID!, $name: String) {
  updateVolume(nid: $nid, vid: $vid, name: $name) {
    ...NovelDetailFragment
    ...ErrorFragment
  }
}
    ${NovelDetailFragmentFragmentDoc}
${ErrorFragmentFragmentDoc}`;
export type UpdateVolumeMutationFn = Apollo.MutationFunction<UpdateVolumeMutation, UpdateVolumeMutationVariables>;

/**
 * __useUpdateVolumeMutation__
 *
 * To run a mutation, you first call `useUpdateVolumeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateVolumeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateVolumeMutation, { data, loading, error }] = useUpdateVolumeMutation({
 *   variables: {
 *      nid: // value for 'nid'
 *      vid: // value for 'vid'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useUpdateVolumeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateVolumeMutation, UpdateVolumeMutationVariables>) {
        return Apollo.useMutation<UpdateVolumeMutation, UpdateVolumeMutationVariables>(UpdateVolumeDocument, baseOptions);
      }
export type UpdateVolumeMutationHookResult = ReturnType<typeof useUpdateVolumeMutation>;
export type UpdateVolumeMutationResult = Apollo.MutationResult<UpdateVolumeMutation>;
export type UpdateVolumeMutationOptions = Apollo.BaseMutationOptions<UpdateVolumeMutation, UpdateVolumeMutationVariables>;
export const UpdateChapterDocument = gql`
    mutation updateChapter($nid: ID!, $cid: ID!, $update: ChapterInput!) {
  updateChapter(nid: $nid, cid: $cid, update: $update) {
    ... on Chapter {
      cid
      nid
    }
    ...ErrorFragment
  }
}
    ${ErrorFragmentFragmentDoc}`;
export type UpdateChapterMutationFn = Apollo.MutationFunction<UpdateChapterMutation, UpdateChapterMutationVariables>;

/**
 * __useUpdateChapterMutation__
 *
 * To run a mutation, you first call `useUpdateChapterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateChapterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateChapterMutation, { data, loading, error }] = useUpdateChapterMutation({
 *   variables: {
 *      nid: // value for 'nid'
 *      cid: // value for 'cid'
 *      update: // value for 'update'
 *   },
 * });
 */
export function useUpdateChapterMutation(baseOptions?: Apollo.MutationHookOptions<UpdateChapterMutation, UpdateChapterMutationVariables>) {
        return Apollo.useMutation<UpdateChapterMutation, UpdateChapterMutationVariables>(UpdateChapterDocument, baseOptions);
      }
export type UpdateChapterMutationHookResult = ReturnType<typeof useUpdateChapterMutation>;
export type UpdateChapterMutationResult = Apollo.MutationResult<UpdateChapterMutation>;
export type UpdateChapterMutationOptions = Apollo.BaseMutationOptions<UpdateChapterMutation, UpdateChapterMutationVariables>;
export const DeleteNovelDocument = gql`
    mutation deleteNovel($nid: ID!) {
  deleteNovel(nid: $nid) {
    status
    msg
  }
}
    `;
export type DeleteNovelMutationFn = Apollo.MutationFunction<DeleteNovelMutation, DeleteNovelMutationVariables>;

/**
 * __useDeleteNovelMutation__
 *
 * To run a mutation, you first call `useDeleteNovelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteNovelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteNovelMutation, { data, loading, error }] = useDeleteNovelMutation({
 *   variables: {
 *      nid: // value for 'nid'
 *   },
 * });
 */
export function useDeleteNovelMutation(baseOptions?: Apollo.MutationHookOptions<DeleteNovelMutation, DeleteNovelMutationVariables>) {
        return Apollo.useMutation<DeleteNovelMutation, DeleteNovelMutationVariables>(DeleteNovelDocument, baseOptions);
      }
export type DeleteNovelMutationHookResult = ReturnType<typeof useDeleteNovelMutation>;
export type DeleteNovelMutationResult = Apollo.MutationResult<DeleteNovelMutation>;
export type DeleteNovelMutationOptions = Apollo.BaseMutationOptions<DeleteNovelMutation, DeleteNovelMutationVariables>;
export const DeleteVolumeDocument = gql`
    mutation deleteVolume($nid: ID!, $vid: ID!) {
  deleteVolume(nid: $nid, vid: $vid) {
    ...NovelDetailFragment
    ...ErrorFragment
  }
}
    ${NovelDetailFragmentFragmentDoc}
${ErrorFragmentFragmentDoc}`;
export type DeleteVolumeMutationFn = Apollo.MutationFunction<DeleteVolumeMutation, DeleteVolumeMutationVariables>;

/**
 * __useDeleteVolumeMutation__
 *
 * To run a mutation, you first call `useDeleteVolumeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteVolumeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteVolumeMutation, { data, loading, error }] = useDeleteVolumeMutation({
 *   variables: {
 *      nid: // value for 'nid'
 *      vid: // value for 'vid'
 *   },
 * });
 */
export function useDeleteVolumeMutation(baseOptions?: Apollo.MutationHookOptions<DeleteVolumeMutation, DeleteVolumeMutationVariables>) {
        return Apollo.useMutation<DeleteVolumeMutation, DeleteVolumeMutationVariables>(DeleteVolumeDocument, baseOptions);
      }
export type DeleteVolumeMutationHookResult = ReturnType<typeof useDeleteVolumeMutation>;
export type DeleteVolumeMutationResult = Apollo.MutationResult<DeleteVolumeMutation>;
export type DeleteVolumeMutationOptions = Apollo.BaseMutationOptions<DeleteVolumeMutation, DeleteVolumeMutationVariables>;
export const DeleteChapterDocument = gql`
    mutation deleteChapter($nid: ID!, $cid: ID!) {
  deleteChapter(nid: $nid, cid: $cid) {
    ...NovelDetailFragment
    ...ErrorFragment
  }
}
    ${NovelDetailFragmentFragmentDoc}
${ErrorFragmentFragmentDoc}`;
export type DeleteChapterMutationFn = Apollo.MutationFunction<DeleteChapterMutation, DeleteChapterMutationVariables>;

/**
 * __useDeleteChapterMutation__
 *
 * To run a mutation, you first call `useDeleteChapterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteChapterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteChapterMutation, { data, loading, error }] = useDeleteChapterMutation({
 *   variables: {
 *      nid: // value for 'nid'
 *      cid: // value for 'cid'
 *   },
 * });
 */
export function useDeleteChapterMutation(baseOptions?: Apollo.MutationHookOptions<DeleteChapterMutation, DeleteChapterMutationVariables>) {
        return Apollo.useMutation<DeleteChapterMutation, DeleteChapterMutationVariables>(DeleteChapterDocument, baseOptions);
      }
export type DeleteChapterMutationHookResult = ReturnType<typeof useDeleteChapterMutation>;
export type DeleteChapterMutationResult = Apollo.MutationResult<DeleteChapterMutation>;
export type DeleteChapterMutationOptions = Apollo.BaseMutationOptions<DeleteChapterMutation, DeleteChapterMutationVariables>;
export const AuthDocument = gql`
    query auth {
  authenticated @client
}
    `;

/**
 * __useAuthQuery__
 *
 * To run a query within a React component, call `useAuthQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthQuery({
 *   variables: {
 *   },
 * });
 */
export function useAuthQuery(baseOptions?: Apollo.QueryHookOptions<AuthQuery, AuthQueryVariables>) {
        return Apollo.useQuery<AuthQuery, AuthQueryVariables>(AuthDocument, baseOptions);
      }
export function useAuthLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AuthQuery, AuthQueryVariables>) {
          return Apollo.useLazyQuery<AuthQuery, AuthQueryVariables>(AuthDocument, baseOptions);
        }
export type AuthQueryHookResult = ReturnType<typeof useAuthQuery>;
export type AuthLazyQueryHookResult = ReturnType<typeof useAuthLazyQuery>;
export type AuthQueryResult = Apollo.QueryResult<AuthQuery, AuthQueryVariables>;
export const VolumeModalDocument = gql`
    query volumeModal {
  volumeForm @client {
    open
    vid
    name
  }
}
    `;

/**
 * __useVolumeModalQuery__
 *
 * To run a query within a React component, call `useVolumeModalQuery` and pass it any options that fit your needs.
 * When your component renders, `useVolumeModalQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVolumeModalQuery({
 *   variables: {
 *   },
 * });
 */
export function useVolumeModalQuery(baseOptions?: Apollo.QueryHookOptions<VolumeModalQuery, VolumeModalQueryVariables>) {
        return Apollo.useQuery<VolumeModalQuery, VolumeModalQueryVariables>(VolumeModalDocument, baseOptions);
      }
export function useVolumeModalLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VolumeModalQuery, VolumeModalQueryVariables>) {
          return Apollo.useLazyQuery<VolumeModalQuery, VolumeModalQueryVariables>(VolumeModalDocument, baseOptions);
        }
export type VolumeModalQueryHookResult = ReturnType<typeof useVolumeModalQuery>;
export type VolumeModalLazyQueryHookResult = ReturnType<typeof useVolumeModalLazyQuery>;
export type VolumeModalQueryResult = Apollo.QueryResult<VolumeModalQuery, VolumeModalQueryVariables>;
export const UserDocument = gql`
    query user {
  user {
    ... on User {
      username
      token
    }
    ...ErrorFragment
  }
}
    ${ErrorFragmentFragmentDoc}`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const ServerDocument = gql`
    query server {
  status
}
    `;

/**
 * __useServerQuery__
 *
 * To run a query within a React component, call `useServerQuery` and pass it any options that fit your needs.
 * When your component renders, `useServerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useServerQuery({
 *   variables: {
 *   },
 * });
 */
export function useServerQuery(baseOptions?: Apollo.QueryHookOptions<ServerQuery, ServerQueryVariables>) {
        return Apollo.useQuery<ServerQuery, ServerQueryVariables>(ServerDocument, baseOptions);
      }
export function useServerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ServerQuery, ServerQueryVariables>) {
          return Apollo.useLazyQuery<ServerQuery, ServerQueryVariables>(ServerDocument, baseOptions);
        }
export type ServerQueryHookResult = ReturnType<typeof useServerQuery>;
export type ServerLazyQueryHookResult = ReturnType<typeof useServerLazyQuery>;
export type ServerQueryResult = Apollo.QueryResult<ServerQuery, ServerQueryVariables>;
export const NovelListDocument = gql`
    query novelList($filter: NovelFilter, $limit: Int, $offset: Int, $sort: NovelSort) {
  novels(filter: $filter, limit: $limit, offset: $offset, sort: $sort) {
    entries {
      ...NovelBriefFragment
    }
    offset
    limit
    totalCount
  }
}
    ${NovelBriefFragmentFragmentDoc}`;

/**
 * __useNovelListQuery__
 *
 * To run a query within a React component, call `useNovelListQuery` and pass it any options that fit your needs.
 * When your component renders, `useNovelListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNovelListQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useNovelListQuery(baseOptions?: Apollo.QueryHookOptions<NovelListQuery, NovelListQueryVariables>) {
        return Apollo.useQuery<NovelListQuery, NovelListQueryVariables>(NovelListDocument, baseOptions);
      }
export function useNovelListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NovelListQuery, NovelListQueryVariables>) {
          return Apollo.useLazyQuery<NovelListQuery, NovelListQueryVariables>(NovelListDocument, baseOptions);
        }
export type NovelListQueryHookResult = ReturnType<typeof useNovelListQuery>;
export type NovelListLazyQueryHookResult = ReturnType<typeof useNovelListLazyQuery>;
export type NovelListQueryResult = Apollo.QueryResult<NovelListQuery, NovelListQueryVariables>;
export const MyNovelsDocument = gql`
    query myNovels {
  user {
    ... on User {
      novels {
        entries {
          nid
          cover
          title
          views
          chapters(limit: 1, sortDirection: DESC) {
            totalCount
            entries {
              cid
              index
              title
            }
          }
        }
        offset
        limit
        totalCount
        hasNext @client
        hasPrev @client
      }
    }
    ...ErrorFragment
  }
}
    ${ErrorFragmentFragmentDoc}`;

/**
 * __useMyNovelsQuery__
 *
 * To run a query within a React component, call `useMyNovelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyNovelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyNovelsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyNovelsQuery(baseOptions?: Apollo.QueryHookOptions<MyNovelsQuery, MyNovelsQueryVariables>) {
        return Apollo.useQuery<MyNovelsQuery, MyNovelsQueryVariables>(MyNovelsDocument, baseOptions);
      }
export function useMyNovelsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyNovelsQuery, MyNovelsQueryVariables>) {
          return Apollo.useLazyQuery<MyNovelsQuery, MyNovelsQueryVariables>(MyNovelsDocument, baseOptions);
        }
export type MyNovelsQueryHookResult = ReturnType<typeof useMyNovelsQuery>;
export type MyNovelsLazyQueryHookResult = ReturnType<typeof useMyNovelsLazyQuery>;
export type MyNovelsQueryResult = Apollo.QueryResult<MyNovelsQuery, MyNovelsQueryVariables>;
export const NovelDetailsDocument = gql`
    query novelDetails($nid: ID!) {
  novel(nid: $nid) {
    ...NovelDetailFragment
  }
}
    ${NovelDetailFragmentFragmentDoc}`;

/**
 * __useNovelDetailsQuery__
 *
 * To run a query within a React component, call `useNovelDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useNovelDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNovelDetailsQuery({
 *   variables: {
 *      nid: // value for 'nid'
 *   },
 * });
 */
export function useNovelDetailsQuery(baseOptions: Apollo.QueryHookOptions<NovelDetailsQuery, NovelDetailsQueryVariables>) {
        return Apollo.useQuery<NovelDetailsQuery, NovelDetailsQueryVariables>(NovelDetailsDocument, baseOptions);
      }
export function useNovelDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NovelDetailsQuery, NovelDetailsQueryVariables>) {
          return Apollo.useLazyQuery<NovelDetailsQuery, NovelDetailsQueryVariables>(NovelDetailsDocument, baseOptions);
        }
export type NovelDetailsQueryHookResult = ReturnType<typeof useNovelDetailsQuery>;
export type NovelDetailsLazyQueryHookResult = ReturnType<typeof useNovelDetailsLazyQuery>;
export type NovelDetailsQueryResult = Apollo.QueryResult<NovelDetailsQuery, NovelDetailsQueryVariables>;
export const NovelInfoDocument = gql`
    query novelInfo($nid: ID!) {
  novel(nid: $nid) {
    nid
    cover
    title
    desc
    status
    genre
    tags
  }
}
    `;

/**
 * __useNovelInfoQuery__
 *
 * To run a query within a React component, call `useNovelInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useNovelInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNovelInfoQuery({
 *   variables: {
 *      nid: // value for 'nid'
 *   },
 * });
 */
export function useNovelInfoQuery(baseOptions: Apollo.QueryHookOptions<NovelInfoQuery, NovelInfoQueryVariables>) {
        return Apollo.useQuery<NovelInfoQuery, NovelInfoQueryVariables>(NovelInfoDocument, baseOptions);
      }
export function useNovelInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NovelInfoQuery, NovelInfoQueryVariables>) {
          return Apollo.useLazyQuery<NovelInfoQuery, NovelInfoQueryVariables>(NovelInfoDocument, baseOptions);
        }
export type NovelInfoQueryHookResult = ReturnType<typeof useNovelInfoQuery>;
export type NovelInfoLazyQueryHookResult = ReturnType<typeof useNovelInfoLazyQuery>;
export type NovelInfoQueryResult = Apollo.QueryResult<NovelInfoQuery, NovelInfoQueryVariables>;
export const ChapterInfoDocument = gql`
    query chapterInfo($nid: ID!, $cid: ID!) {
  novel(nid: $nid) {
    nid
    chapter(cid: $cid) {
      cid
      title
      content
      matureContent
    }
  }
}
    `;

/**
 * __useChapterInfoQuery__
 *
 * To run a query within a React component, call `useChapterInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useChapterInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChapterInfoQuery({
 *   variables: {
 *      nid: // value for 'nid'
 *      cid: // value for 'cid'
 *   },
 * });
 */
export function useChapterInfoQuery(baseOptions: Apollo.QueryHookOptions<ChapterInfoQuery, ChapterInfoQueryVariables>) {
        return Apollo.useQuery<ChapterInfoQuery, ChapterInfoQueryVariables>(ChapterInfoDocument, baseOptions);
      }
export function useChapterInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChapterInfoQuery, ChapterInfoQueryVariables>) {
          return Apollo.useLazyQuery<ChapterInfoQuery, ChapterInfoQueryVariables>(ChapterInfoDocument, baseOptions);
        }
export type ChapterInfoQueryHookResult = ReturnType<typeof useChapterInfoQuery>;
export type ChapterInfoLazyQueryHookResult = ReturnType<typeof useChapterInfoLazyQuery>;
export type ChapterInfoQueryResult = Apollo.QueryResult<ChapterInfoQuery, ChapterInfoQueryVariables>;
export const VolumeInfoDocument = gql`
    query volumeInfo($nid: ID!) {
  novel(nid: $nid) {
    nid
    volumes {
      vid
      name
    }
  }
}
    `;

/**
 * __useVolumeInfoQuery__
 *
 * To run a query within a React component, call `useVolumeInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useVolumeInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVolumeInfoQuery({
 *   variables: {
 *      nid: // value for 'nid'
 *   },
 * });
 */
export function useVolumeInfoQuery(baseOptions: Apollo.QueryHookOptions<VolumeInfoQuery, VolumeInfoQueryVariables>) {
        return Apollo.useQuery<VolumeInfoQuery, VolumeInfoQueryVariables>(VolumeInfoDocument, baseOptions);
      }
export function useVolumeInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VolumeInfoQuery, VolumeInfoQueryVariables>) {
          return Apollo.useLazyQuery<VolumeInfoQuery, VolumeInfoQueryVariables>(VolumeInfoDocument, baseOptions);
        }
export type VolumeInfoQueryHookResult = ReturnType<typeof useVolumeInfoQuery>;
export type VolumeInfoLazyQueryHookResult = ReturnType<typeof useVolumeInfoLazyQuery>;
export type VolumeInfoQueryResult = Apollo.QueryResult<VolumeInfoQuery, VolumeInfoQueryVariables>;
export const ChapterDetailsDocument = gql`
    query chapterDetails($nid: ID!, $cid: ID!) {
  novel(nid: $nid) {
    nid
    title
    chapter(cid: $cid) {
      cid
      index
      title
      content
    }
  }
}
    `;

/**
 * __useChapterDetailsQuery__
 *
 * To run a query within a React component, call `useChapterDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useChapterDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChapterDetailsQuery({
 *   variables: {
 *      nid: // value for 'nid'
 *      cid: // value for 'cid'
 *   },
 * });
 */
export function useChapterDetailsQuery(baseOptions: Apollo.QueryHookOptions<ChapterDetailsQuery, ChapterDetailsQueryVariables>) {
        return Apollo.useQuery<ChapterDetailsQuery, ChapterDetailsQueryVariables>(ChapterDetailsDocument, baseOptions);
      }
export function useChapterDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChapterDetailsQuery, ChapterDetailsQueryVariables>) {
          return Apollo.useLazyQuery<ChapterDetailsQuery, ChapterDetailsQueryVariables>(ChapterDetailsDocument, baseOptions);
        }
export type ChapterDetailsQueryHookResult = ReturnType<typeof useChapterDetailsQuery>;
export type ChapterDetailsLazyQueryHookResult = ReturnType<typeof useChapterDetailsLazyQuery>;
export type ChapterDetailsQueryResult = Apollo.QueryResult<ChapterDetailsQuery, ChapterDetailsQueryVariables>;