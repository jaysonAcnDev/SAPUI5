namespace my.bookshop;

entity Books {
  key ID : Integer;
  title  : String;
  stock  : Integer;
}

entity Items {
  key ID : Integer;
  title  : String;
  stock  : Integer;
}

entity TestTable {
  key ID     : Integer;
  name       : String;
  description: String;
}

entity TB_CART {
  key CARTNUMBER : Integer;
  DATE : String;
  OWNER : String;
  ORDER : Composition of many TB_ORDERLIST
                              on ORDER.CARTNUMBER = $self;
}

entity TB_ORDERLIST {
  key CARTNUMBER : Association to TB_CART;
  key ITEM : String;
  QUANTITY : Integer;
}

