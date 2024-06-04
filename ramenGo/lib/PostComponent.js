import PostService from "../PostService";

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
                posts = await PostService.getPosts();
                console.log(posts)
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
  