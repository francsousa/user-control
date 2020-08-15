class Utils {

  static dateFormat(date) {

    return putZero(date.getDate()) + '/' + putZero((date.getMonth() + 1)) + '/' + date.getFullYear()
        + ' ' + putZero(date.getHours()) + ':' + putZero(date.getMinutes())

    function putZero(data) {

      if (data <= 9) {

        return '0' + data

      }

      return data

    }

  }

}
