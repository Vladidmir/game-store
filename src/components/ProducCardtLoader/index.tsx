import ContentLoader, { IContentLoaderProps } from "react-content-loader";

export const ProductCardLoader = (
  props: JSX.IntrinsicAttributes & IContentLoaderProps
) => (
  <ContentLoader
    speed={2}
    width={260}
    height={210}
    viewBox="0 0 260 210"
    backgroundColor="#f3f3f3"
    foregroundColor="#bebdbd"
    {...props}
  >
    <rect x="20" y="142" rx="0" ry="0" width="5" height="2" />
    <rect x="0" y="5" rx="0" ry="0" width="252" height="90" />
    <rect x="2" y="103" rx="0" ry="0" width="145" height="17" />
    <rect x="5" y="153" rx="0" ry="0" width="88" height="11" />
    <rect x="3" y="129" rx="0" ry="0" width="139" height="16" />
    <rect x="6" y="175" rx="0" ry="0" width="41" height="10" />
    <rect x="22" y="182" rx="0" ry="0" width="3" height="5" />
    <circle cx="220" cy="174" r="13" />
  </ContentLoader>
);
