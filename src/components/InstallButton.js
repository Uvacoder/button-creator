import React, { useState, useEffect } from "react"
import { Button } from "react-bootstrap"

export const InstallButton = () => {
  const [showInstallBtn, setShowInstallBtn] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined" && typeof navigator !== "undefined") {
      const isIOS =
        navigator.userAgent.includes("iPhone") ||
        navigator.userAgent.includes("iPad") ||
        (navigator.userAgent.includes("Macintosh") &&
          typeof navigator.maxTouchPoints === "number" &&
          navigator.maxTouchPoints > 2)

      const isSupportingBrowser = window.hasOwnProperty(
        "BeforeInstallPromptEvent"
      )

      const isStandalone = window.matchMedia("(display-mode: standalone)")
        .matches

      if (isStandalone) {
        setShowInstallBtn(false)
      } else {
        setShowInstallBtn(
          isIOS ||
            (isSupportingBrowser &&
              (localStorage.getItem("buttonCreatorInstalled") === "" ||
                localStorage.getItem("buttonCreatorInstalled") === "false"))
        )
      }

      // This will only be called if the browser is eligible and PWA has NOT been installed yet
      window.addEventListener("beforeinstallprompt", () => {
        localStorage.setItem("buttonCreatorInstalled", "false")
        setShowInstallBtn(true)
      })

      window.addEventListener("appinstalled", () => {
        localStorage.setItem("buttonCreatorInstalled", "true")
      })
    }
  }, [])

  let installButton

  if (showInstallBtn) {
    installButton = (
      <Button
        variant="primary"
        size="sm"
        onClick={() => {
          if (typeof document !== "undefined") {
            document.querySelector("pwa-install").openPrompt()
          }
        }}
      >
        Install +
      </Button>
    )
  }

  return (
    <>
      {installButton}
      <pwa-install
        usecustom
        iconpath="https://button-creator.richardtaylordawson.com/images/favicon.svg"
        manifestpath="/manifest.json"
      ></pwa-install>
    </>
  )
}
