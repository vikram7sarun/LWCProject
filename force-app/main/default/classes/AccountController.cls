/**
 * @description       : 
 * @author            : vikram7sarun@gmail.com
 * @group             : 
 * @last modified on  : 03-04-2025
 * @last modified by  : vikram7sarun@gmail.com
**/
public with sharing class AccountController 
{
    @AuraEnabled(cacheable=true)
    public static List<Account> getHighRevenueAccountRecords() {
        return [SELECT Id, Name, AnnualRevenue FROM Account WHERE AnnualRevenue > 1000000 LIMIT 10];
    }




}