export default class CustomErrors extends Error {
  constructor(props) {
    super(props);
    console.log(props);
    this.name = 'CustomError';
    this.msg = props;
  }
}
