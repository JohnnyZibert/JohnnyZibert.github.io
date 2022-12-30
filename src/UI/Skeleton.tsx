import React from 'react'
import ContentLoader, { IContentLoaderProps } from 'react-content-loader'
import styled from 'styled-components'

const SkeletonIcon = (props: JSX.IntrinsicAttributes & IContentLoaderProps) => (
  <Skeleton>
    <ContentLoader
      speed={2}
      // width={300}
      // height={435}
      viewBox="0 0 300 435"
      backgroundColor="#dedede"
      foregroundColor="#f5f5f5"
      {...props}
    >
      <rect x="3" y="3" rx="20" ry="20" width="300" height="435" />
    </ContentLoader>
  </Skeleton>
)

export default SkeletonIcon

const Skeleton = styled.div`
  margin: 2rem;
  @media (max-width: 500px) {
    scale: 0.8;
  }
`
