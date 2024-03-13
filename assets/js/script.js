let { createApp } = Vue

createApp
    ({
        data() {
            return {
                newItem: '',
                toDoItems:[],
                error: false,
            }
        },
        methods:
        {
            addItem()
            {
                console.log(this.newItem.lenght);
                //console.log(this.toDoItems);
                //this.toDoItems.text.unshift(this.newItem)
                //console.log(toDoItems);
                //console.log(this.toDoItems.entries);
                
                if(this.newItem.lenght > 3)
                {
                    let newObject =
                    {
                    text: this.newItem,
                    done:false
                    }
                    this.toDoItems.unshift(newObject)
                    this.newItem = ""
                    this.error = false;
                }
                else
                {
                    this.error = true
                }
                
                
                //console.log(this.toDoItems);

            }
        },
        mounted() {
            
        }
    }).mount("#app")