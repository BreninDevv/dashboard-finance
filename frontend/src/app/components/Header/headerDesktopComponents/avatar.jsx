"use client";
import React, { useState } from "react";
import { useLanguage } from "../../../i18n/languageContext";
import Image from "next/image";
import LogoutBlack from "../../icons/logout-circle-r-line-black.svg";
import { useRouter } from "next/navigation";

const Avatar = () => {
  const { t } = useLanguage();

  const [name, setName] = useState(() => {
    if (typeof window === "undefined") return "";
    return localStorage.getItem("userName") ?? "";
  });
  const [modal, setModal] = useState(false);

  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    router.replace("/login");
  };

  return (
    <>
      <div className="flex xl:flex-row lg:flex-row flex-col xl:items-center lg:items-center gap-3 xl:border-l lg:border-l border-white/10 xl:pl-10 lg:pl-10 h-full  ">
        <div className="xl:flex lg:flex flex-col items-end">
          <span className="xl:text-[9px] lg:text-[9px] text-[12px] font-medium text-slate-500 uppercase tracking-[0.2em] leading-tight">
            {t.userLogin}
          </span>
          <div className="hidden xl:block lg:block">
            <span className="text-[13px] font-bold dark:text-white text-[#0a091b] leading-none mt-1">
              {name || "Visitante"}
            </span>
          </div>
        </div>

        <div
          className="xl:w-10 xl:h-10 lg:w-10 lg:h-10 w-13 h-13 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-sm font-black shadow-lg shadow-indigo-500/10 cursor-pointer duration-300 hover:scale-115 "
          onClick={() => setModal((prev) => !prev)}
        >
          {name ? name.charAt(0).toUpperCase() : "U"}
        </div>
        <div className="block xl:hidden lg:hidden">
          <span className="text-[13px] font-bold dark:text-white text-black leading-none ">
            {name || "Visitante"}
          </span>
        </div>
      </div>
      {modal ? (
        <div className="absolute 2xl:right-15 2xl:top-34 top-24 xl:right-15 lg:right-15 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="w-64 overflow-hidden rounded-[2rem] border border-slate-200 bg-white/90 backdrop-blur-md shadow-2xl shadow-slate-400 dark:border-white/10 dark:bg-[#151722]/95 dark:shadow-black/50">
            <div className="h-2 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

            <div className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-50 dark:bg-red-500/10 border border-red-100 dark:border-red-500/20">
                  <Image
                    src={LogoutBlack}
                    alt="Logout Icon"
                    className="w-6 h-6 dark:invert"
                  />
                </div>

                <h1 className="font-inter text-lg font-bold text-slate-900 dark:text-white">
                  {t.SeeYouLater}
                </h1>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {t.logout}
                  <span className="font-semibold text-indigo-500 pl-1">
                    {name}
                  </span>
                  ?
                </p>
              </div>
              <div className="mt-6 flex flex-col gap-2">
                <button
                  onClick={handleLogout}
                  className="w-full rounded-xl bg-red-500 py-3 text-sm font-bold text-white shadow-lg shadow-red-500/30 transition-all hover:bg-red-600 hover:shadow-red-500/40 active:scale-95"
                >
                  {t.leaveNow}
                </button>

                <button
                  onClick={() => setModal(false)}
                  className="w-full rounded-xl bg-slate-100 py-3 text-sm font-semibold text-slate-600 transition-all hover:bg-slate-200 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10"
                >
                  {t.cancel}
                </button>
              </div>
              <div className="mt-4 flex items-center justify-center gap-2 opacity-50">
                <span className="h-[1px] w-4 bg-slate-300 dark:bg-slate-700"></span>
                <span className="text-[10px] font-medium uppercase tracking-widest text-slate-400 dark:text-slate-500">
                  {t.jesusIsGood}
                </span>
                <span className="h-[1px] w-4 bg-slate-300 dark:bg-slate-700"></span>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Avatar;
