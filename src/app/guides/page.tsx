import Display from "@/shared/typography/Display"

import Paragraph from "@/components/Paragraph"
import InternalLink from "@/components/InternalLink"

const Guides = () => {
  return (
    <div>
      <Display className="mb-4">Guides Overview</Display>

      <div className="flex flex-col gap-2">
        <Paragraph>
          В данной секции рассматриваются варианты использования Ashel UI Kit с
          разными технологиями, такими как vite, next js и прочие
        </Paragraph>

        <Paragraph>
          Почитайте пример базовой настройки Ashel UI Kit с использованием{" "}
          <InternalLink href="guides/vite">vite</InternalLink>
        </Paragraph>
      </div>
    </div>
  )
}

export default Guides
