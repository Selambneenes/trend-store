export type OffcanvasType = {
  children: React.ReactNode;
  onHideCart: (e: React.MouseEvent<HTMLDivElement>) => void;
};

export type OffcanvasOverlayType = {
  children: React.ReactNode;
};

export type BackdropType = {
  onHideCart: (e: React.MouseEvent<HTMLDivElement>) => void;
};
  