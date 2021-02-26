import React, {Component} from 'react';

class Petugas extends Component{
  constructor(){
    super();
    this.state = {
      harga: 0,
      ppn: 0,
      diskon: 0,
      hasildata: 0,
    }
  }
  bind = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }
    Operasi = (event) => {
      event.preventDefault();
      let data = {
        harga: parseInt(this.state.harga),
        ppn: parseInt(this.state.ppn),
        diskon: parseInt(this.state.diskon),
      }
      let data_ppn = data.harga*(data.ppn/100)
      let data_diskon = data.harga*(data.diskon/100)
      let data_hasil = data.harga + data_ppn - data_diskon
      this.setState({
        hasildata: data_hasil
      })
    }
  render(){
    return(
      <div className="container col-sm-6">
        <div className="padd">
          <div className="modal-content">
            <center>
          <div className="alert alert-secondary">
            <h2 className="text1">Hitung Harga Akhir</h2>
              <form onSubmit={this.Operasi}>
                <div className="modal-body">
                  <h4 className="text">Harga Awal</h4>
                  <input type="number" name="harga" className="form-control" value={this.state.harga} onChange={this.bind} required />
                  <br></br>
                  <h4 className="text">PPN</h4>
                  <input type="number" name="ppn" className="form-control" value={this.state.ppn} onChange={this.bind} required />
                  <br></br>
                  <h4 className="text">Diskon</h4>
                  <input type="number" name="diskon" className="form-control" value={this.state.diskon} onChange={this.bind} required />
                </div>
                <br></br>
                <div class="d-grid gap-2">
                  <button class="btn btn-danger" type="submit">Hitung</button>
                </div>
              </form>
              <br></br>
              <strong><center>Harga Akhir</center></strong>
              <div className="alert alert-danger">
                <strong><center>Rp. {this.state.hasildata};</center></strong>
              </div>
          </div>
            </center>
          </div>
        </div>
      </div>
    );
  }
}
export default Petugas;