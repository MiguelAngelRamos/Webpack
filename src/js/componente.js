export const hello = (name) => {
  console.log('Iniciando el saludo...');
  const h1 = document.createElement('h1');
  h1.innerText = `Hola, ${name}`;

  // para renderizarlo
  document.body.append(h1);
}
