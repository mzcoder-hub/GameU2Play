
export const userInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

export const title_listKategori = "Data Kategori";
export const button_tetle_addKategori = "Add Kategori";
export const button_tetle_editKategori = "Edit";
export const button_tetle_deleteKategori = "Delete";
export const titleAlertDelete = "Peringatan.!";
export const textAlertDelete = "Yakin akan menghapus category ini ?";
export const confirmButtonText = "Hapus";
export const cancelButtonText = "Batal";



export const titleAddKategori = "Tambah Kategori";
export const responseAddKategori_success = "Tambah kategori berhasil";
export const responseAddKategori_failed = "Tambah kategori gagal";


export const titleEditKategori = "Edit Kategori";
export const responseGetKategori_success = "Data kategori ditemukan";
export const responseGetKategori_failed = "Data kategori gagal ditemukan";
export const responseEditKategori_success = "Edit kategori berhasil";
export const responseEditKategori_failed = "Edit kategori gagal";