let { createApp } = Vue

createApp
    ({
        data() {
            return {
                newItem: "",
                toDoItems:[]
            }
        },
        methods:
        {
            addItem()
            {
                console.log(this.newItem);
                //console.log(this.toDoItems);
                //this.toDoItems.text.unshift(this.newItem)
                //console.log(toDoItems);
                //console.log(this.toDoItems.entries);
                let newObject = {
                    text: this.newItem,
                    done:false
                }
                this.toDoItems.push(newObject)
                console.log(this.toDoItems);
                                
            }
        },
        mounted() {
            
        }
    }).mount("#app")