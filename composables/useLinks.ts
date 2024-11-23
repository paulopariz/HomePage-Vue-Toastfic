export interface Link {
  to: string;
  text: string;
}

export function useLinks() {
  const { $i18n } = useNuxtApp();
  const { t } = $i18n;

  const getting_started: Link[] = [
    { to: "/getting-started", text: t("routes-name.install") },
    { to: "/getting-started/demo", text: t("routes-name.demo") },
  ];

  const style: Link[] = [{ to: "/style/palette", text: t("routes-name.palette") }];

  const use: Link[] = [
    { to: "/use/position", text: t("routes-name.position") },
    { to: "/use/close-toast", text: t("routes-name.close-toast") },
    { to: "/use/duration", text: t("routes-name.duration") },
    { to: "/use/progress-bar", text: t("routes-name.progress-bar") },
    { to: "/use/colorful", text: t("routes-name.colorful") },
    { to: "/use/maximum", text: t("routes-name.maximum") },
    { to: "/use/theme", text: t("routes-name.theme") },
    { to: "/use/event", text: t("routes-name.event") },
    { to: "/use/personalize", text: t("routes-name.personalize") },
  ];

  return {
    getting_started,
    style,
    use,
  };
}
