let { createApp } = Vue

createApp
    ({
        data() {
            return {
                newItem: "",
                toDoItems:
                    [
                        {
                            text: "",
                            done: false,
                        },
                        {
                            text: "",
                            done: false,
                        },
                        {
                            text: "",
                            done: false,
                        },
                        {
                            text: "",
                            done: false,
                        },
                        {
                            text: "",
                            done: false,
                        },
                        {
                            text: "",
                            done: false,
                        },

                    ]
            }
        },
        methods:
        {
            addItem()
            {
                console.log(this.newItem);
                this.toDoItems.unshift(this.newItem)
                console.log(toDoItems);
                
            }
        },
        mounted() {
            
        }
    }).mount("#app")