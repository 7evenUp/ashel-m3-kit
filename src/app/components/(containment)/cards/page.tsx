import Heading from "@/components/Heading";
import Subheading from "@/components/Subheading";
import Body from "@/components/ui/text/Body";
import Display from "@/components/ui/text/Display";
import Headline from "@/components/ui/text/Headline";
import Button from "@/lib/Button";
import Card from "@/lib/Card";

const CardsPage = () => {
  return (
    <div>
      <Display className="mb-4">Cards</Display>

      <div className="flex flex-col gap-2">
        <Heading>Примеры</Heading>

        <div className="flex flex-col gap-6">
          <div>
            <Subheading>Elevated</Subheading>
            <div className="flex gap-2">
              <Card
                appearance={"elevated"}
                className="flex flex-col gap-2 w-[300px]"
              >
                <Headline>Обуздай хаос</Headline>
                <Body className="max-w-[200px]">
                  С помощью быстрого искусственного интеллекта
                </Body>
                <Button appearance={"tonal"} className="mt-auto self-end">
                  Подробнее
                </Button>
              </Card>
              <Card
                appearance={"elevated"}
                className="flex flex-col gap-2 w-[300px]"
              >
                <Headline>Стань художником</Headline>
                <Body className="max-w-[200px]">
                  Хватит быть потребителем - пора стать дизайнером своей жизни!
                </Body>
                <Button appearance={"tonal"} className="mt-auto self-end">
                  Быть, а не казаться
                </Button>
              </Card>
            </div>
          </div>

          <div>
            <Subheading>Filled</Subheading>
            <div className="flex gap-2">
              <Card
                appearance={"filled"}
                className="flex flex-col gap-2 w-[300px]"
              >
                <Headline>Обуздай хаос</Headline>
                <Body className="max-w-[200px]">
                  С помощью быстрого искусственного интеллекта
                </Body>
                <Button appearance={"filled"} className="mt-auto self-end">
                  Подробнее
                </Button>
              </Card>
              <Card
                appearance={"filled"}
                className="flex flex-col gap-2 w-[300px]"
              >
                <Headline>Стань художником</Headline>
                <Body className="max-w-[200px]">
                  Хватит быть потребителем - пора стать дизайнером своей жизни!
                </Body>
                <Button appearance={"filled"} className="mt-auto self-end">
                  Быть, а не казаться
                </Button>
              </Card>
            </div>
          </div>

          <div>
            <Subheading>Outlined</Subheading>
            <div className="flex gap-2">
              <Card
                appearance={"outlined"}
                className="flex flex-col gap-2 w-[300px]"
              >
                <Headline>Обуздай хаос</Headline>
                <Body className="max-w-[200px]">
                  С помощью быстрого искусственного интеллекта
                </Body>
                <Button appearance={"tonal"} className="mt-auto self-end">
                  Подробнее
                </Button>
              </Card>
              <Card
                appearance={"outlined"}
                className="flex flex-col gap-2 w-[300px]"
              >
                <Headline>Стань художником</Headline>
                <Body className="max-w-[200px]">
                  Хватит быть потребителем - пора стать дизайнером своей жизни!
                </Body>
                <Button appearance={"tonal"} className="mt-auto self-end">
                  Быть, а не казаться
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsPage;
