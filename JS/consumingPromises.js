// import state from "./promises.js";

// const checkStock = () => {
//     return new Promise((resolve, reject) => {
//         if(state.stock.water >= 250 && state.stock.flour >= 250) {
//             resolve('Roti berhasil dibuat');
//         } else {
//             reject('Kurang bahan!');
//         }
//     });
// }

// const handleSuccess = (resolvedValue) => {
//     console.log(resolvedValue);
// };

// const handleFailure = (rejectValue) => {
//     console.log(rejectValue);
// };

// checkStock().then(handleSuccess, handleFailure);



const exam = {
    students : 9,
    kelas : 3
};

const checkRules = () => {
    return new Promise((resolve, reject) => {
        if(exam.students >= 10 && exam.kelas >= 2) {
            resolve('Ujian dapat dilaksanakan!');
        } else {
            reject('Jumlah murid atau kelas kurang!');
        }
    });
}

const handleSuccess = resolveValue => {
    console.log(resolveValue);
}

const handleFailure = rejectionReason => {
    console.log(rejectionReason);
}

checkRules()
    .then(handleSuccess)
    .catch(handleFailure); // menggunakan catch akan membantu kita untuk membuat kode lebih rapi dan menerapkan konsep separation of concerns.