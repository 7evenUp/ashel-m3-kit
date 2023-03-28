"use client";

import Heading from "@/components/Heading";
import Subheading from "@/components/Subheading";
import Display from "@/components/ui/text/Display";
import IconButton from "@/lib/IconButton";
import ToggledIconButton from "@/lib/ToggledIconButton";
import { BookmarkEmpty, Download, Heart, Settings } from "iconoir-react";
import { useState } from "react";

const IconButtonsPage = () => {
  const [isSelected, setIsSelected] = useState(false);

  const toggleButton = () => setIsSelected(!isSelected);

  return (
    <div>
      <Display className="mb-4">Icon Buttons</Display>

      <div className="flex flex-col gap-2">
        <Heading>Примеры</Heading>

        <div className="flex gap-6">
          <div>
            <Subheading>Filled no toggle</Subheading>
            <div className="flex flex-col gap-4 rounded-xl border border-light-outline dark:border-dark-outline p-10 w-fit">
              <div className="flex items-center gap-4">
                <IconButton appearance={"filled"} icon={<Heart />} />
                <IconButton
                  appearance={"filled"}
                  icon={<Settings />}
                  disabled
                />
              </div>
            </div>
          </div>
          <div>
            <Subheading>Filled toggle</Subheading>
            <div className="flex flex-col gap-4 rounded-xl border border-light-outline dark:border-dark-outline p-10 w-fit">
              <div className="flex items-center gap-4">
                {/* <ToggledIconButton
                  appearance={"filled"}
                  icon={<BookmarkEmpty />}
                  onClick={toggleButton}
                  selected={isSelected}
                />
                <ToggledIconButton
                  appearance={"filled"}
                  icon={<Download />}
                  disabled
                  onClick={toggleButton}
                  selected={isSelected}
                /> */}
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-6">
          <div>
            <Subheading>Tonal no toggle</Subheading>
            <div className="flex flex-col gap-4 rounded-xl border border-light-outline dark:border-dark-outline p-10 w-fit">
              <div className="flex items-center gap-4">
                <IconButton appearance={"tonal"} icon={<Heart />} />
                <IconButton appearance={"tonal"} icon={<Settings />} disabled />
              </div>
            </div>
          </div>
          <div>
            <Subheading>Tonal toggle</Subheading>
            <div className="flex flex-col gap-4 rounded-xl border border-light-outline dark:border-dark-outline p-10 w-fit">
              <div className="flex items-center gap-4">
                <IconButton appearance={"tonal"} icon={<BookmarkEmpty />} />
                <IconButton appearance={"tonal"} icon={<Download />} disabled />
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-6">
          <div>
            <Subheading>Outlined no toggle</Subheading>
            <div className="flex flex-col gap-4 rounded-xl border border-light-outline dark:border-dark-outline p-10 w-fit">
              <div className="flex items-center gap-4">
                <IconButton appearance={"outlined"} icon={<Heart />} />
                <IconButton
                  appearance={"outlined"}
                  icon={<Settings />}
                  disabled
                />
              </div>
            </div>
          </div>
          <div>
            <Subheading>Outlined toggle</Subheading>
            <div className="flex flex-col gap-4 rounded-xl border border-light-outline dark:border-dark-outline p-10 w-fit">
              <div className="flex items-center gap-4">
                <IconButton appearance={"outlined"} icon={<BookmarkEmpty />} />
                <IconButton
                  appearance={"outlined"}
                  icon={<Download />}
                  disabled
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-6">
          <div>
            <Subheading>Standart no toggle</Subheading>
            <div className="flex flex-col gap-4 rounded-xl border border-light-outline dark:border-dark-outline p-10 w-fit">
              <div className="flex items-center gap-4">
                <IconButton appearance={"standart"} icon={<Heart />} />
                <IconButton
                  appearance={"standart"}
                  icon={<Settings />}
                  disabled
                />
              </div>
            </div>
          </div>
          <div>
            <Subheading>Standart toggle</Subheading>
            <div className="flex flex-col gap-4 rounded-xl border border-light-outline dark:border-dark-outline p-10 w-fit">
              <div className="flex items-center gap-4">
                <IconButton appearance={"standart"} icon={<BookmarkEmpty />} />
                <IconButton
                  appearance={"standart"}
                  icon={<Download />}
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconButtonsPage;
