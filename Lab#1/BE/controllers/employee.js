const employee = [
  { id: '1', name: 'Mohamed Sayed' },
];

exports.getEmployees = async (req, res, next) => {
  res.status(200).json({ data: employee });
};

// TODO
exports.deleteEmployee = async (req, res, next) => {
  const{id} = req.params;
  const index = employee.findIndex(emp => emp.id === id);
  if (index !== -1) {
    employee.splice(index, 1);
    res.status(200).json({ message: 'employee deleted successfully' });
    
  } else {
    res.status(404).json({ message: 'employee not found' });
  }
};

// TODO
exports.createEmployee = async (req, res, next) => {
const { name } = req.body;
const newemployee={
  id: Date.now().toString(),
  name};
employee.push(newemployee);
res.status(201).json({ data: newemployee
});
};

// TODO
exports.updateEmployee = async (req, res, next) => {
const { id } = req.params;
const { name } = req.body;
const emp=employee.find(emp => emp.id === id);
if (emp) {
  emp.name = name;
  res.status(200).json({ data: emp, message: 'employee updated successfully' });
}
else {  res.status(404).json({ message: 'employee not found' });
}

};