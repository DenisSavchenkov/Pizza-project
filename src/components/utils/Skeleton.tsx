import ContentLoader from 'react-content-loader';

const Skeleton = (props: any) => (
  <ContentLoader
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="138" cy="143" r="129" />
    <rect x="-1" y="294" rx="10" ry="10" width="280" height="23" />
    <rect x="-1" y="341" rx="10" ry="10" width="280" height="67" />
    <rect x="15" y="434" rx="10" ry="10" width="74" height="28" />
    <rect x="110" y="425" rx="27" ry="27" width="152" height="45" />
    <rect x="206" y="453" rx="0" ry="0" width="5" height="0" />
  </ContentLoader>
);

export default Skeleton;
