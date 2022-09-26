// @ts-nocheck

/**
 * ## Sample クラス
 * - TSDoc サンプル用のクラス
 *
 * ---
 * ### クラス変数
 * @var classVar TSDoc サンプル用のクラス変数
 * @privateVar classVarPrivate TSDoc サンプル用のプライベートクラス変数
 *
 * ### クラスメソッド
 * @function classMethod TSDoc サンプル用のクラスメソッド
 * @privateFunction classMethodPrivate TSDoc サンプル用のプライベートクラスメソッド
 *
 * ### インスタンスメソッド
 * @function instanceMethod TSDoc サンプル用のインスタンスメソッド
 * @privateFunction instanceMethodPrivate TSDoc サンプル用のプライベートインスタンスメソッド
 *
 */
class Sample {

  /**
   * ## Sample.classVar
   * - TSDoc サンプル用のクラス変数
   *
   */
  static classVar = "sample"

  /**
   * ## Sample.classVarPrivate - @private
   * - TSDoc サンプル用のプライベートクラス変数
   *
   */
  private static classVarPrivate = "sample"

  /**
   * ## Sample.classMethod()
   * - TSDoc サンプル用のクラスメソッド
   *
   * ### その他の項目は funtion と同じ
   *
   * ---
   * ### Args
   * @param sample TSDoc サンプル用のファンクション引数
   *
   * ### Return
   * 返却値の詳細
   * > - @param param オブジェクトで返却する場合は各パラメータを記載
   *
   * ### Example
   * 上記項目で説明が十分でなければ記載
   * > ```js
   * > sampleFunction("test") // -> "test"
   * > ```
   *
   */
  static classMethod(arg: unknown) { return null }

  /**
   * ## Sample.classMethodPrivate() - @private
   * - TSDoc サンプル用のプライベートクラスメソッド
   *
   * ---
   * ### Args
   * @param sample TSDoc サンプル用のファンクション引数
   *
   * ### Return
   * 返却値の詳細
   * > - @param param オブジェクトで返却する場合は各パラメータを記載
   *
   * ### Example
   * 上記項目で説明が十分でなければ記載
   * > ```js
   * > sampleFunction("test") // -> "test"
   * > ```
   *
   */
  private static classMethodPrivate(arg: unknown) { return null }

  /**
   * ## Sample#classMethodPrivate()
   * - TSDoc サンプル用のインスタンスメソッド
   *
   * ---
   * ### Args
   * @param sample TSDoc サンプル用のファンクション引数
   *
   * ### Return
   * 返却値の詳細
   * > - @param param オブジェクトで返却する場合は各パラメータを記載
   *
   * ### Example
   * 上記項目で説明が十分でなければ記載
   * > ```js
   * > sampleFunction("test") // -> "test"
   * > ```
   *
   */
  instanceMethod(arg: unknown) { return null }

  /**
   * ## Sample#classMethodPrivate() - @private
   * - TSDoc サンプル用のプライベートインスタンスメソッド
   *
   * ---
   * ### Args
   * @param sample TSDoc サンプル用のファンクション引数
   *
   * ### Return
   * 返却値の詳細
   * > - @param param オブジェクトで返却する場合は各パラメータを記載
   *
   * ### Example
   * 上記項目で説明が十分でなければ記載
   * > ```js
   * > sampleFunction("test") // -> "test"
   * > ```
   *
   */
  private instanceMethodPrivate(arg: unknown) { return null }

}