// Öğrenci veritabanı (dizi ve nesneler kullanılarak)
const students = [
    {
      id: 1,
      name: 'Ahmet',
      age: 21,
      grades: [85, 90, 78]
    },
    {
      id: 2,
      name: 'Ayşe',
      age: 22,
      grades: [88, 92, 81]
    }
  ];
  
  // Destructuring kullanarak bir öğrencinin bilgilerini alalım
  const [firstStudent, secondStudent] = students;
  const { name: firstName, grades: firstGrades } = firstStudent;
  
  console.log(`İlk öğrencinin adı: ${firstName}`);
  console.log(`İlk öğrencinin notları: ${firstGrades}`);
  
  // Spread operatörü ile öğrencinin notlarını genişletelim
  const newGrades = [...firstGrades, 95];
  console.log(`Yeni notlar: ${newGrades}`);
  
  // Rest parametreleri ile bilinmeyen sayıda notu toplayan bir fonksiyon
  function calculateAverageGrade(name, ...grades) {
    const total = grades.reduce((sum, grade) => sum + grade, 0);
    const average = total / grades.length;
    console.log(`${name} adlı öğrencinin not ortalaması: ${average}`);
  }
  
  calculateAverageGrade(firstName, ...newGrades);
  
  // Template literals ile rapor oluşturalım
  const studentReport = `
  Öğrenci Adı: ${firstName}
  Yaş: ${firstStudent.age}
  Notlar: ${newGrades.join(', ')}
  Ortalama Not: ${(newGrades.reduce((sum, grade) => sum + grade, 0) / newGrades.length).toFixed(2)}
  `;
  
  console.log(studentReport);
  
  // Default parametreler ile bir fonksiyon yazalım
  function createStudentReport({ name, age, grades = [] } = {}) {
    const average = grades.length > 0
      ? grades.reduce((sum, grade) => sum + grade, 0) / grades.length
      : 'Not girilmemiş';
    
    return `
  Öğrenci Adı: ${name}
  Yaş: ${age}
  Ortalama Not: ${average}
    `;
  }
  
  const newStudent = {
    name: 'Mehmet',
    age: 23
  };
  
  console.log(createStudentReport(newStudent));
  