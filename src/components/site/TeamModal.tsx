"use client";
import React from "react";
import Image from "next/image";

export type TeamModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitleTop?: string;
  subtitleMid?: string;
  body: string[];
  imageSrc?: string;
};

export default function TeamModal({
  open,
  onClose,
  title,
  subtitleTop,
  subtitleMid,
  body,
  imageSrc,
}: TeamModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      <button
        aria-label="Close"
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />
      <div className="pointer-events-none fixed inset-0 flex items-center justify-center p-6">
        <div className="pointer-events-auto max-w-5xl grid gap-8 rounded-[20px] border border-black/10 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.2)] md:grid-cols-[minmax(280px,627px)_minmax(320px,484px)]">
          {/* Image block with alternating corner radius per Figma */}
          <div className="relative h-auto w-full">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={title}
                fill
                // sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain rounded-[20px] md:rounded-[20px_0_20px_0]"
                priority
              />
            ) : (
              <div className="h-full w-full rounded-[20px] md:rounded-[20px_0_20px_0] bg-gray-100" />
            )}
          </div>

          {/* Content block */}
          <div className=" gap-8 flex flex-col justify-start items-center">
            <div className="space-y-3 ml-[-2vw]">
              <div className="flex justify-end ">
                <Image
                  src="/deco/deco3.webp"
                  alt="Opinova"
                  width={300}
                  height={50}
                  className="object-contain "
                />
              </div>

              <h3 className="font-serif font-bold text-3xl md:text-[48px] leading-tight text-[#343434]">
                {title}
              </h3>
              {subtitleTop && (
                <p className="text-[16px] md:text-[18px] font-normal text-[#888888]">
                  {subtitleTop}
                </p>
              )}
              {subtitleMid && (
                <p className="text-[16px] md:text-[18px] font-bold text-[#888888]">
                  {subtitleMid}
                </p>
              )}
            </div>

            <div className="space-y-4 text-[16px] md:text-[18px] text-[#888888]">
              {body.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <div className="flex justify-end">
              <button
                onClick={onClose}
                className="cursor-pointer rounded-md bg-gray-900 px-4 py-2 text-sm text-white hover:bg-gray-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

