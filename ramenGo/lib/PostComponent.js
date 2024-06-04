export function setupPostComponent(element) {
    //datas
    let counter = 0
    let posts = [];

    //methods
    const setCounter = (count) => {
      counter = count
      element.innerHTML = `count is ${counter}`
    }
    element.addEventListener('click', () => setCounter(++counter))

    const created = () => {
        async function get(){
            try{
                console.log('teste')
                //posts = await PostService.getPosts();
            } catch(err){
                console.log(err)
            }
        }
        return get();
    }


    //mounted
    setCounter(0);
    created();
}
  