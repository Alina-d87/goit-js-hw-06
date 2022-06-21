const categoria = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoria.length}`);
categoria.forEach(element => {
  return console.log(
    `Categoria: ${element.querySelector('h2').textContent}
	Elements: ${element.querySelectorAll('li').length}`,
  );
});
