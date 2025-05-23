document.addEventListener('DOMContentLoaded', () => {
    // ボタンのクリックイベントリスナー
    const calculateButton = document.getElementById('calculate');
    const resultElement = document.getElementById('result');

    calculateButton.addEventListener('click', () => {
        // 時給の設定を取得
        const komaRate = parseFloat(document.getElementById('komaRate').value) || 0;
        const procraRate = parseFloat(document.getElementById('procraRate').value) || 0;
        const dailyAllowanceRate = parseFloat(document.getElementById('dailyAllowanceRate').value) || 0;
        const adminAllowanceRate = parseFloat(document.getElementById('adminAllowanceRate').value) || 0;

        // 入力値を取得
        const koma = parseInt(document.getElementById('koma').value) || 0;
        const procra = parseInt(document.getElementById('procra').value) || 0;
        const dailyAllowance = parseFloat(document.getElementById('dailyAllowance').value) || 0;
        const adminAllowance = parseFloat(document.getElementById('adminAllowance').value) || 0;

        // 給与計算ロジック
        const salary = (koma * komaRate) +
                       (procra * procraRate) +
                       (dailyAllowance * dailyAllowanceRate) +
                       (adminAllowance * adminAllowanceRate);

        // 結果を表示し、アニメーションを追加
        resultElement.textContent = `--- 円`; // 一度リセット
        resultElement.classList.remove('active'); // アニメーションクラスをリセット
        
        // 短い遅延後に値をセットし、アニメーションクラスを追加
        setTimeout(() => {
            resultElement.textContent = `${salary.toFixed(0)}円`;
            resultElement.classList.add('active');
        }, 50); // わずかな遅延
    });
});