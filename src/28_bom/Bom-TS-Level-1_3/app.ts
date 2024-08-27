const output = document.getElementById("outputArea") as HTMLDivElement;

const getBrowserData = () => {
  output.innerText = `
  Browsername: ${navigator.appName},
  Betriebssystem-Architektur: ${navigator.userAgentData.platform},
  Browser-Version: `;

  navigator.userAgentData.brands.forEach((brand: any) => {
    output.innerText += `${brand.brand}: ${brand.version}, `;
  });
  output.innerText += `
  Window Auflösung: ${screen.width} x ${screen.height},
  Innenhöhe und -breite des Dokuments: ${window.innerWidth} x ${window.innerHeight},
  colorDepth: ${screen.colorDepth},
  pixelDepth: ${screen.pixelDepth},
  `;
};

getBrowserData();
