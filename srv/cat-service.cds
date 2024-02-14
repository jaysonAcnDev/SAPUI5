using my.bookshop as my from '../db/data-model';

service CatalogService {
    @readonly 
    entity TBL_Books as projection on my.Books;
    entity TBL_Items as projection on my.Items;
    entity TBL_Testtable as projection on my.TestTable;
    entity TB_CART as projection on my.TB_CART;
    entity TB_ORDERLIST as projection on my.TB_ORDERLIST;


    function test() returns String;
    function insertData() returns String;
    function updateData() returns String;

}
