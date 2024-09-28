export interface Link {
  to: string;
  text: string;
}

export function useLinks() {
  const getting_started: Link[] = [
    { to: "/getting-started", text: "Instalar" },
    { to: "/getting-started/demo", text: "Demonstração" },
  ];

  const style: Link[] = [{ to: "/style/palette", text: "Paleta de cores" }];

  const use: Link[] = [
    { to: "/use/position", text: "Posição" },
    { to: "/use/close-toast", text: "Fechar toast" },
    { to: "/use/duration", text: "Tempo de fechamento" },
    { to: "/use/progress-bar", text: "Barra de progresso" },
    { to: "/use/colorful", text: "Ativar/Desativar cores" },
    { to: "/use/maximum", text: "Máximo de toasts" },
    { to: "/use/theme", text: "Tema" },
    { to: "/use/event", text: "Lidar com eventos" },
    { to: "/use/personalize", text: "Personalização do toast" },
  ];

  return {
    getting_started,
    style,
    use,
  };
}
