class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
    <div class="card-cars px-2 py-4">
    <img src="${this.image}" class="card-img-top mt-4">
    <div class="card-body">
        <h5 class="card-title fs-6">${this.manufacture}/${this.model}</h5>
        <h5 class="card-title fs-5 fw-bold">Rp ${this.rentPerDay} / hari</h5>
        <p class="cars__p">${this.description}</p>
        <div class="row">
            <div class="col-1">
                <i data-feather="users" class="icon-input"></i>
            </div>
            <div class="col-10 ms-lg-2">
                ${this.capacity} orang
            </div>
        </div>
        <div class="row mt-2">
            <div class="col-1">
                <i data-feather="settings" class="icon-input"></i>
            </div>
            <div class="col-10 ms-lg-2">
                ${this.transmission}
            </div>
        </div>
        <div class="row mt-2 mb-4">
            <div class="col-1">
                <i data-feather="calendar" class="icon-input"></i>
            </div>
            <div class="col-10 ms-lg-2">
                Tahun ${this.year}
            </div>
        </div>
            <div class="card-footer">
                <a href="#" class="btn btn-hijau-card" style="width:100%">Go somewhere</a>
            </div>
        </div>
    </div>
    `;
  }
}
