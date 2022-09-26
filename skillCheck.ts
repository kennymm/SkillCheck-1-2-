// TODO: 1. 下記の関数にTypescriptの型定義を追加してください
const getTag = (value:unknown):string => {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]'
  }
  return toString.call(value)
}

const isNull = (value:unknown):boolean => {
  return value === null
}

const isString = (value:unknown):boolean => {
  const type = typeof value
  return type === 'string' || (type === 'object' && value != null && !Array.isArray(value) && getTag(value) == '[object String]')
}

const isNumber = (value:unknown):boolean => {
  return typeof value === 'number' ||
    (typeof value === 'object' && value !== null && getTag(value) == '[object Number]')
}

const isObject = (value:unknown):boolean => {
  const type = typeof value
  return value != null && (type === 'object' || type === 'function')
}

const isBoolean = (value:unknown):boolean => {
  return value === true || value === false ||
    (typeof value === 'object' && value !== null && getTag(value) == '[object Boolean]')
}

// --------------------------------------------------------------------------------

// TODO: 2. 下記のクラスに TSDocを追加してください（フォーマットについては、別添の tsdocSample.ts ファイルをご参照ください

// @ts-nocheck

/** 
* ## LocalStorage クラス
* - TSDoc ローカルストレージ用のクラス
*
* ---
* ### クラス変数
* @var storage TSDoc ローカルストレージ用のクラス変数
*
* ### クラスメソッド
* @function getItem TSDoc ローカルストレージ用のクラスメソッド
* @function setItem TSDoc ローカルストレージ用のクラスメソッド
* @function removeItem TSDoc ローカルストレージ用のクラスメソッド
* @privateFunction parseItem TSDoc ローカルストレージ用のプライベートクラスメソッド
*
*/

class LocalStorage {
  /**
   * ## LocalStorage.storage
   * - TSDoc ローカルストレージ用のクラス変数
   *
   */
  static storage = typeof window !== "undefined" ? window.localStorage : null
  
  /**
   * ## LocalStorage.getItem()
   * - TSDoc ローカルストレージ用のクラスメソッド
   *
   *
   * ---
   * ### Args
   * @param key TSDoc ローカルストレージ用のファンクション引数
   *
   * ### Return
   * 返却値の詳細
   *  - TSDoc nullまたは型を返す
   *
   * ### Example
   * 型の場合
   * > ```js
   * > getItem('{"math":80}') // -> { math: 80 } 
   * > ```
   *
   */
  static getItem<ReturnType>(key: string): ReturnType | null {
    if(isNull(this.storage)) return null
    const value = this.storage.getItem(key)
    return this.parseItem<ReturnType>(value)
  }

  /**
   * ## LocalStorage.setItem()
   * - TSDoc ローカルストレージ用のクラスメソッド
   *
   *
   * ---
   * ### Args
   * @param key TSDoc ローカルストレージ用のファンクション引数
   * @param value TSDoc ローカルストレージ用のファンクション引数
   *
   * ### Return
   * 返却値の詳細
   * - TSDoc 真偽値を返す
   *
   */
  static setItem(key: string, value: string | number | object | boolean) {
    if(isNull(this.storage)) return false
    try {
      let conversionValue = ''
      if (isString(value)) conversionValue = value
      if (isNumber(value) || isBoolean(value)) conversionValue = String(value)
      if (isObject(value)) conversionValue = JSON.stringify(value)

      this.storage.setItem(key, conversionValue)
      return value
    } catch (error) {
      console.error(error)
      return false
    }
  }

  /**
   * ## LocalStorage.removeItem()
   * - TSDoc ローカルストレージ用のクラスメソッド
   *
   *
   * ---
   * ### Args
   * @param key TSDoc ローカルストレージ用のファンクション引数
   *
   * ### Return
   * 返却値の詳細
   * > - TSDoc 返却値なし
   *
   */
  static removeItem(key: string): void {
    if(isNull(this.storage)) return
    this.storage.removeItem(key)
  }

 /**
   * ## LocalStorage.parseItem() - @private
   * - TSDoc ローカルストレージ用のプライベートクラスメソッド
   *
   *
   * ---
   * ### Args
   * @param value TSDoc ローカルストレージ用のファンクション引数
   *
   * ### Return
   * 返却値の詳細
   * > - @return TSDoc nullまたは型を返す
   *
   * ### Example
   * 型の場合
   * > ```js
   * > parseItem('{"math":80}') // -> { math: 80 } 
   * > ```
   *
   */
  private static parseItem<ReturnType>(value: string | null): ReturnType | null {
    if (isNull(value)) return null

    try {
      return JSON.parse(value)
    } catch (error) {
      console.error(error)
      return null
    }
  }

  
}

// --------------------------------------------------------------------------------

// TODO: 3. 下記のa~dの対応をお願いします。
// a. フロントエンドのフレームワーク（React.js, Vue.js, Angular など）を初期で立ち上げてください
// b. その上で、ページ上にボタンを1つ作成してください
// c. ボタンをクリックしたタイミングで、一般に公開されているAPI（個人で作成したものでなければどれでもOK）からデータを取得してください
// d. 上記で取得したデータをHTML上に表示してください
// e. 外部からアクセス可能なgitリポジトリにプッシュしてください

