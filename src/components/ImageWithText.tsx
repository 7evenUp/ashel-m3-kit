import { FC, ReactNode } from "react"
import Image, { StaticImageData } from "next/image"

import Body from "./typography/Body"

interface Props {
  src: StaticImageData
  alt: string
  width: number
  children: ReactNode
  quality?: number
}

const ImageWithText: FC<Props> = ({ src, alt, children, width, quality }) => {
  return (
    <div className="flex flex-col gap-2 my-6" style={{ maxWidth: width }}>
      <Image
        className="w-full rounded-xl border border-light-outlineVariant dark:border-dark-outlineVariant"
        alt={alt}
        src={src}
        quality={quality}
      />
      <Body size={"small"} className="px-2">
        {children}
      </Body>
    </div>
  )
}

export default ImageWithText
