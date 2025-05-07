const mongoose = require("mongoose")
const saleModel = require("./models/saleModel")

mongoose.connect("mongodb://localhost:27017/crud", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console("DB successfully connected"))
  .catch(err => console("DB connection error: ", err));

const saleData = [
    {
        name: "Nguyễn Văn A",
        birthDate: "1990-05-12",
        phoneNumbers: ["0987654321", "0912345678"],
        addresses: ["Hà Nội", "TP. Hồ Chí Minh"]
    },
    {
        name: "Trần Thị B",
        birthDate: "1993-08-25",
        phoneNumbers: ["0909123456"],
        addresses: ["Đà Nẵng"]
    },
    {
        name: "Lê Văn C",
        birthDate: "1988-11-02",
        phoneNumbers: ["0934567890", "0978123456"],
        addresses: ["Hải Phòng", "Quảng Ninh"]
    },
    {
        name: "Phạm Thị D",
        birthDate: "1995-03-15",
        phoneNumbers: ["0967123456"],
        addresses: ["Cần Thơ"]
    },
    {
        name: "Hoàng Văn E",
        birthDate: "1992-09-30",
        phoneNumbers: ["0911223344", "0988776655"],
        addresses: ["Huế", "Đà Nẵng"]
    },
    {
        name: "Đỗ Thị F",
        birthDate: "1985-01-10",
        phoneNumbers: ["0909112233"],
        addresses: ["Nha Trang"]
    },
    {
        name: "Bùi Văn G",
        birthDate: "1991-07-07",
        phoneNumbers: ["0977332211", "0933445566"],
        addresses: ["Bình Dương", "TP. HCM"]
    },
    {
        name: "Vũ Thị H",
        birthDate: "1996-12-22",
        phoneNumbers: ["0988123123"],
        addresses: ["Hà Nội"]
    },
    {
        name: "Ngô Văn I",
        birthDate: "1989-06-17",
        phoneNumbers: ["0922334455", "0944112233"],
        addresses: ["Vũng Tàu", "Biên Hòa"]
    },
    {
        name: "Lý Thị K",
        birthDate: "1994-04-04",
        phoneNumbers: ["0911335577"],
        addresses: ["Long An"]
    }
];

async seedSales() {
    try {
        await saleModel.deleteMany({});
        const result = await saleModel.insertMany(saleData);
        console.log("Seed successfully:", result.length, "sales");
    } catch (err) {
        console.error("Seed error:", err);
    } finally {
        mongoose.connection.close();
    }
}

seedSales();