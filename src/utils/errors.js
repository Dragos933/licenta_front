export default class CustomErrors extends Error {
  constructor(props) {
    super(props);
    this.name = 'CustomError';
    this.msg = props;
  }
}
