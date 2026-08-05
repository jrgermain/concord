export type ColorVariant =
  | "brand"
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "teal"
  | "blue"
  | "purple"
  | "pink"
  | "gray"
  | "black"
  | "white";

export enum Color {
  // Standard palette
  Brand1 = "var(--cd-color-brand-1)",
  Brand2 = "var(--cd-color-brand-2)",
  Brand3 = "var(--cd-color-brand-3)",
  Brand4 = "var(--cd-color-brand-4)",
  Brand5 = "var(--cd-color-brand-5)",
  Brand6 = "var(--cd-color-brand-6)",
  Brand7 = "var(--cd-color-brand-7)",
  Brand8 = "var(--cd-color-brand-8)",
  Brand9 = "var(--cd-color-brand-9)",
  BrandTransparent = "var(--cd-color-brand-transparent)",
  BrandExtraTransparent = "var(--cd-color-brand-extra-transparent)",
  Red1 = "var(--cd-color-red-1)",
  Red2 = "var(--cd-color-red-2)",
  Red3 = "var(--cd-color-red-3)",
  Red4 = "var(--cd-color-red-4)",
  Red5 = "var(--cd-color-red-5)",
  Red6 = "var(--cd-color-red-6)",
  Red7 = "var(--cd-color-red-7)",
  Red8 = "var(--cd-color-red-8)",
  Red9 = "var(--cd-color-red-9)",
  RedTransparent = "var(--cd-color-red-transparent)",
  RedExtraTransparent = "var(--cd-color-red-extra-transparent)",
  Orange1 = "var(--cd-color-orange-1)",
  Orange2 = "var(--cd-color-orange-2)",
  Orange3 = "var(--cd-color-orange-3)",
  Orange4 = "var(--cd-color-orange-4)",
  Orange5 = "var(--cd-color-orange-5)",
  Orange6 = "var(--cd-color-orange-6)",
  Orange7 = "var(--cd-color-orange-7)",
  Orange8 = "var(--cd-color-orange-8)",
  Orange9 = "var(--cd-color-orange-9)",
  OrangeTransparent = "var(--cd-color-orange-transparent)",
  OrangeExtraTransparent = "var(--cd-color-orange-extra-transparent)",
  Yellow1 = "var(--cd-color-yellow-1)",
  Yellow2 = "var(--cd-color-yellow-2)",
  Yellow3 = "var(--cd-color-yellow-3)",
  Yellow4 = "var(--cd-color-yellow-4)",
  Yellow5 = "var(--cd-color-yellow-5)",
  Yellow6 = "var(--cd-color-yellow-6)",
  Yellow7 = "var(--cd-color-yellow-7)",
  Yellow8 = "var(--cd-color-yellow-8)",
  Yellow9 = "var(--cd-color-yellow-9)",
  YellowTransparent = "var(--cd-color-yellow-transparent)",
  YellowExtraTransparent = "var(--cd-color-yellow-extra-transparent)",
  Green1 = "var(--cd-color-green-1)",
  Green2 = "var(--cd-color-green-2)",
  Green3 = "var(--cd-color-green-3)",
  Green4 = "var(--cd-color-green-4)",
  Green5 = "var(--cd-color-green-5)",
  Green6 = "var(--cd-color-green-6)",
  Green7 = "var(--cd-color-green-7)",
  Green8 = "var(--cd-color-green-8)",
  Green9 = "var(--cd-color-green-9)",
  GreenTransparent = "var(--cd-color-green-transparent)",
  GreenExtraTransparent = "var(--cd-color-green-extra-transparent)",
  Teal1 = "var(--cd-color-teal-1)",
  Teal2 = "var(--cd-color-teal-2)",
  Teal3 = "var(--cd-color-teal-3)",
  Teal4 = "var(--cd-color-teal-4)",
  Teal5 = "var(--cd-color-teal-5)",
  Teal6 = "var(--cd-color-teal-6)",
  Teal7 = "var(--cd-color-teal-7)",
  Teal8 = "var(--cd-color-teal-8)",
  Teal9 = "var(--cd-color-teal-9)",
  TealTransparent = "var(--cd-color-teal-transparent)",
  TealExtraTransparent = "var(--cd-color-teal-extra-transparent)",
  Blue1 = "var(--cd-color-blue-1)",
  Blue2 = "var(--cd-color-blue-2)",
  Blue3 = "var(--cd-color-blue-3)",
  Blue4 = "var(--cd-color-blue-4)",
  Blue5 = "var(--cd-color-blue-5)",
  Blue6 = "var(--cd-color-blue-6)",
  Blue7 = "var(--cd-color-blue-7)",
  Blue8 = "var(--cd-color-blue-8)",
  Blue9 = "var(--cd-color-blue-9)",
  BlueTransparent = "var(--cd-color-blue-transparent)",
  BlueExtraTransparent = "var(--cd-color-blue-extra-transparent)",
  Purple1 = "var(--cd-color-purple-1)",
  Purple2 = "var(--cd-color-purple-2)",
  Purple3 = "var(--cd-color-purple-3)",
  Purple4 = "var(--cd-color-purple-4)",
  Purple5 = "var(--cd-color-purple-5)",
  Purple6 = "var(--cd-color-purple-6)",
  Purple7 = "var(--cd-color-purple-7)",
  Purple8 = "var(--cd-color-purple-8)",
  Purple9 = "var(--cd-color-purple-9)",
  PurpleTransparent = "var(--cd-color-purple-transparent)",
  PurpleExtraTransparent = "var(--cd-color-purple-extra-transparent)",
  Pink1 = "var(--cd-color-pink-1)",
  Pink2 = "var(--cd-color-pink-2)",
  Pink3 = "var(--cd-color-pink-3)",
  Pink4 = "var(--cd-color-pink-4)",
  Pink5 = "var(--cd-color-pink-5)",
  Pink6 = "var(--cd-color-pink-6)",
  Pink7 = "var(--cd-color-pink-7)",
  Pink8 = "var(--cd-color-pink-8)",
  Pink9 = "var(--cd-color-pink-9)",
  PinkTransparent = "var(--cd-color-pink-transparent)",
  PinkExtraTransparent = "var(--cd-color-pink-extra-transparent)",
  Gray1 = "var(--cd-color-gray-1)",
  Gray2 = "var(--cd-color-gray-2)",
  Gray3 = "var(--cd-color-gray-3)",
  Gray4 = "var(--cd-color-gray-4)",
  Gray5 = "var(--cd-color-gray-5)",
  Gray6 = "var(--cd-color-gray-6)",
  Gray7 = "var(--cd-color-gray-7)",
  Gray8 = "var(--cd-color-gray-8)",
  Gray9 = "var(--cd-color-gray-9)",
  GrayTransparent = "var(--cd-color-gray-transparent)",
  GrayExtraTransparent = "var(--cd-color-gray-extra-transparent)",

  // Semantic colors
  SurfacePrimary = "var(--cd-color-surface-primary)",
  SurfaceSecondary = "var(--cd-color-surface-secondary)",
  SurfaceTertiary = "var(--cd-color-surface-tertiary)",
  TextPrimary = "var(--cd-color-text-primary)",
  TextSecondary = "var(--cd-color-text-secondary)",
  TextTertiary = "var(--cd-color-text-tertiary)",
  ContrastBackground = "var(--cd-color-contrast-background)",
  ContrastText = "var(--cd-color-contrast-text)",
  Shadow = "var(--cd-color-shadow)",
  Border = "var(--cd-color-border)",
}

export enum FontSize {
  XS = "var(--cd-font-size-xs)",
  S = "var(--cd-font-size-s)",
  M = "var(--cd-font-size-m)",
  L = "var(--cd-font-size-l)",
  XL = "var(--cd-font-size-xl)",
  XXL = "var(--cd-font-size-2xl)",
  XXXL = "var(--cd-font-size-3xl)",
  XXXXL = "var(--cd-font-size-4xl)",
}

export enum FontWeight {
  Light = "var(--cd-font-weight-light)",
  Normal = "var(--cd-font-weight-normal)",
  Semibold = "var(--cd-font-weight-semibold)",
  Bold = "var(--cd-font-weight-bold)",
  Black = "var(--cd-font-weight-black)",
}

export enum FontFamily {
  Body = "var(--cd-font-family-body)",
  Heading = "var(--cd-font-family-heading)",
  Mono = "var(--cd-font-family-mono)",
}

export enum Space {
  None = "var(--cd-space-none)",
  XXXS = "var(--cd-space-3xs)",
  XXS = "var(--cd-space-2xs)",
  XS = "var(--cd-space-xs)",
  S = "var(--cd-space-s)",
  M = "var(--cd-space-m)",
  L = "var(--cd-space-l)",
  XL = "var(--cd-space-xl)",
  XXL = "var(--cd-space-2xl)",
  XXXL = "var(--cd-space-3xl)",
  BodyX = "var(--cd-body-x)",
  BodyY = "var(--cd-body-y)",
}

export enum Radius {
  None = "var(--cd-radius-none)",
  S = "var(--cd-radius-s)",
  M = "var(--cd-radius-m)",
  L = "var(--cd-radius-l)",
  XL = "var(--cd-radius-xl)",
  XXL = "var(--cd-radius-2xl)",
  Full = "var(--cd-radius-full)",
}

export enum Shadow {
  None = "var(--cd-shadow-none)",
  S = "var(--cd-shadow-s)",
  M = "var(--cd-shadow-m)",
  L = "var(--cd-shadow-l)",
  XL = "var(--cd-shadow-xl)",
}

export enum BorderWidth {
  None = "var(--cd-border-none)",
  S = "var(--cd-border-s)",
  M = "var(--cd-border-m)",
  L = "var(--cd-border-l)",
  XL = "var(--cd-border-xl)",
}

export enum EasingFunction {
  Default = "var(--cd-ease-default)",
  Out = "var(--cd-ease-out)",
  In = "var(--cd-ease-in)",
  Both = "var(--cd-ease-both)",
  BothSubtle = "var(--cd-ease-both-subtle)",
  Spring = "var(--cd-ease-spring)",
}

export enum Duration {
  S = "var(--cd-duration-s)",
  M = "var(--cd-duration-m)",
  L = "var(--cd-duration-l)",
  XL = "var(--cd-duration-xl)",
}
