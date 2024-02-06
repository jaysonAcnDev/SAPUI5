using my.bookshop as my from '../db/data-model';

service CatalogService {
    @readonly 
    entity TBL_Books as projection on my.Books;
    entity TBL_Items as projection on my.Items;

    function test() returns String;
}
