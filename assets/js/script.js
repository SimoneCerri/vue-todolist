let { createApp } = Vue

createApp
    ({
        data()
        {
            return {
                newItem: "",
                toDoItems:[],
                error: false,
                binItems:[],
            }
        },
        methods:
        {
            addItem()
            {
                //console.log(this.newItem.length);
                //console.log(this.toDoItems);
                //this.toDoItems.text.unshift(this.newItem)
                //console.log(toDoItems);
                //console.log(this.toDoItems.entries);
                if(this.newItem.length > 3)
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
                    this.error = "Insert at least 4 char."
                }
                //console.log(this.toDoItems);
            },
            addDone(index)
            {
                //console.log(this.toDoItems);
                //console.log(...this.toDoItems);
                //console.log(...this.toDoItems.done)
                //const prova = this.toDoItems.done
                //console.log(prova);
                //console.log(this.toDoItems[index].done);
                this.toDoItems[index].done = !this.toDoItems[index].done
            },
            moveToBin(index)
            {
                this.binItems.unshift(this.toDoItems[index])
                //console.log(this.binItems);
                this.toDoItems.splice(this.toDoItems[index],1)
            }
        },
        mounted()
        {
            
        }
    }).mount("#app")