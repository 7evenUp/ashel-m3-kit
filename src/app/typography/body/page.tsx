import Heading from "@/components/Heading"
import ImageWithText from "@/components/ImageWithText"
import Paragraph from "@/components/Paragraph"
import Body from "@/components/ui/text/Body"
import Display from "@/components/ui/text/Display"
import Card from "@/lib/Card"
import articlePestoPic from "@/public/typography/body/article_pesto.png"
import readablePassagesPic from "@/public/typography/body/readable_passages.png"
import setupFlowPic from "@/public/typography/body/setup_flow.png"

const BodyPage = () => {
  return (
    <div>
      <Display className="mb-4">Body роль</Display>

      <div className="flex flex-col gap-2">
        <Heading>Описание</Heading>
        <Paragraph>
          Body роли используются для более длинных отрывков текста в вашем
          приложении.
        </Paragraph>
        <Paragraph>
          Используйте шрифты, предназначенные для стилей основного текста,
          которые читаются при меньших размерах и удобны для чтения в более
          длинных абзацах.
        </Paragraph>
        <Paragraph>
          Избегайте выразительных или декоративных шрифтов для основного текста,
          потому что их может быть труднее читать при маленьком размере.
        </Paragraph>
        <ImageWithText
          alt="Body styles must be readable for long passages"
          src={readablePassagesPic}
          width={400}
        >
          Body должен быть читабельным для длинных отрывков.
        </ImageWithText>

        <div className="flex gap-5">
          <ImageWithText
            alt="Body style used throughout an article about pesto"
            src={articlePestoPic}
            width={400}
          >
            Body, используемый в статье о песто.
          </ImageWithText>
          <ImageWithText
            alt="Example of body style used throughout a setup flow"
            src={setupFlowPic}
            width={400}
          >
            Пример body, используемого в процессе настройки.
          </ImageWithText>
        </div>

        <Heading>Примеры</Heading>
        <Card appearance="outlined" className="w-fit grid grid-cols-2 gap-6">
          <Body size="large">Body large</Body>
          <div className="flex flex-col items-end gap-1">
            <Body>font-size: 16px</Body>
            <Body>line-height: 24px</Body>
            <Body>letter-spacing: 0.5px</Body>
          </div>

          <Body size="medium">Body medium</Body>
          <div className="flex flex-col items-end gap-1">
            <Body>font-size: 14px</Body>
            <Body>line-height: 20px</Body>
            <Body>letter-spacing: 0.25px</Body>
          </div>
          <Body size="small">Body small</Body>
          <div className="flex flex-col items-end gap-1">
            <Body>font-size: 12px</Body>
            <Body>line-height: 16px</Body>
            <Body>letter-spacing: 0.4px</Body>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default BodyPage
