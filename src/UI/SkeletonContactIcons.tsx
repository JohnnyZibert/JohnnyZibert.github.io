import React from 'react'
import ContentLoader, { IContentLoaderProps } from 'react-content-loader'
import styled from 'styled-components'

const SkeletonIconContact = (
  props: JSX.IntrinsicAttributes & IContentLoaderProps
) => (
  <Skeleton>
    <ContentLoader
      speed={2}
      width={48}
      height={48}
      viewBox="0 0 300 435"
      backgroundColor="#dedede"
      foregroundColor="#f5f5f5"
      {...props}
    >
      <rect x="3" y="3" rx="20" ry="20" width="48px" height="48px" />
    </ContentLoader>
  </Skeleton>
)

export default SkeletonIconContact

const Skeleton = styled.div`
  width: 3rem;
  height: 3rem;
  object-fit: cover;
  margin-right: 1rem;
  @media (max-width: 500px) {
    scale: 0.8;
  }
`
