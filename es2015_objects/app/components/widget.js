class Widget extends Component{
  constructor(params, callback) {
    super(params, callback);
    if(params) {
      if(params.data) {
        this.loadData(params.data);
      } else if(params.id) {
          this.id = params.id;
          this.promise = this.getData();
      } else {
        console.log("No params, data or id, cant create widget");
      }
    }
  }
}
