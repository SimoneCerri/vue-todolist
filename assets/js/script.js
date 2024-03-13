let { createApp } = Vue

createApp
    ({
        data()
        {
            return {
                newItem: "",
                toDoItems:
                [
                    {  
                        text:"",
                        done:false
                    },
                    {
                        text: "",
                        done: false
                    },

                ],
                error: false,
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
            addDone()
            {
                console.log(this.toDoItems);
            }
        },
        mounted() {
            
        }
    }).mount("#app")