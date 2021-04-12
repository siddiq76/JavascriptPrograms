let name = {
    firstname: "siddiq",
    lastname: "khan",
    printfullname: function(){
        console.log(this.firstname + this.lastname);
    }
}
name.printfullname();