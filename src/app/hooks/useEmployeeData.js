export async function useEmployeeData() {
  const res = await fetch("https://dummy.restapiexample.com/api/v1/employees");
  return res.json();
  //   return res.data.json();
}
