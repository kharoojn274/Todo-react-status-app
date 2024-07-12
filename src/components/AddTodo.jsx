function AddTodo() {
  return (
    <div class="container">
      <div class="row hr-row">
        <div class="col-3">
          <input type="text" placeholder="Enter todo" />
        </div>
        <div class="col-2">
          <input type="date" name="" id="" />
        </div>
        <div class="col-1">
          <button type="button" class="btn btn-success hr-btn">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
