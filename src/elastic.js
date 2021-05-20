function initEs() {
  $('#es-search').on('keyup',function(){
    console.log('trigger search hear')
  })

  $('#es-search').on('change',function(){
	this.value = "API content";
    console.log('Call API OK')
  })
}

export {
  initEs
}