export function calculateEmployeeStats(employees) {
  // Calculate total employees
  const totalEmployees = employees.length;

  // Calculate total salary
  const totalSalary = employees.reduce(
    (sum, employee) => sum + employee.employee_salary,
    0
  );

  // Calculate highest salary
  const highestSalary = Math.max(
    ...employees.map((employee) => employee.employee_salary)
  );
  const totalAge = employees.reduce(
    (sum, employee) => sum + employee.employee_age,
    0
  );
  const averageAge = Math.ceil(totalAge / totalEmployees);
  return {
    totalEmployees,
    totalSalary,
    highestSalary,
    averageAge,
  };
}
