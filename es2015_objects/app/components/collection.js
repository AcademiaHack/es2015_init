class Collection extends Component {
  constructor(params) {
    super(params);
    this.collection = [];

    if(params && params.data) {
      this.loadData(params.data);
    } else {
      this.promise = this.getData();
    }
  }
}
