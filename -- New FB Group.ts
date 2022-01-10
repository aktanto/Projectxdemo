-- New FB Group
SELECT * FROM "facebookGroups" WHERE "dateCreated"::date > current_date - interval '7 days' AND "dateDeleted" IS NULL ;


--List user register:
SELECT users."dateCreated", users.uuid, "personalInfos"."name", users.email, "personalInfos".phone, users.referral FROM "users" LEFT JOIN "personalInfos" ON "personalInfos".user_id = users.id WHERE users."dateCreated" > current_date - interval '7 days' AND users.status = 'confirmed' ORDER BY users."dateCreated" ASC;

--register user by facebook
SELECT users."dateCreated", users."id", users.uuid, "personalInfos"."name", users.email, users."mobilePhone", "personalInfos".phone, users.facebook FROM "users" LEFT JOIN "personalInfos" ON "personalInfos".user_id = users.id WHERE users.status = 'confirmed' 
AND facebook=TRUE AND users."dateCreated" > current_date - interval '7 days'  
ORDER BY users."dateCreated" ASC ;

--register user by email
SELECT users."dateCreated", users."id", users.uuid, "personalInfos"."name", users.email, users."mobilePhone", "personalInfos".phone, users.facebook FROM "users" LEFT JOIN "personalInfos" ON "personalInfos".user_id = users.id WHERE users.status = 'confirmed' 
AND facebook=FALSE AND users.email IS NOT NULL AND users."dateCreated" > current_date - interval '7 days' 
ORDER BY users."dateCreated" ASC ;

--register user by phone
SELECT users."dateCreated", users."id", users.uuid, "personalInfos"."name", users.email, users."mobilePhone", "personalInfos".phone, users.facebook FROM "users" LEFT JOIN "personalInfos" ON "personalInfos".user_id = users.id WHERE users.status = 'confirmed' 
AND facebook=FALSE AND users."mobilePhone" IS NOT NULL AND users."dateCreated" > current_date - interval '7 days'  
ORDER BY users."dateCreated" ASC;

--Count AutoPost Create
SELECT producthist_id FROM "public"."fbposthistories" WHERE "dateCreated" > current_date - interval '7 days' AND "type" LIKE '%auto%';
--Count AutoPost Fail
SELECT producthist_id FROM "public"."fbposthistories" WHERE "dateCreated" > current_date - interval '7 days' AND "type" LIKE '%auto%' AND "facebookPostId" IS NULL;
--Count Product Auto
SELECT producthist_id FROM "public"."fbposthistories" WHERE "dateCreated" > current_date - interval '7 days' AND "type" LIKE '%auto%' GROUP BY producthist_id;
--Count direct Create
SELECT producthist_id FROM "public"."fbposthistories" WHERE "dateCreated" > current_date - interval '7 days' AND "type" LIKE '%manual%';
--Count direct Fail
SELECT producthist_id FROM "public"."fbposthistories" WHERE "dateCreated" > current_date - interval '7 days' AND "type" LIKE '%manual%' AND "facebookPostId" IS NULL;
--Count Product direct
SELECT producthist_id FROM "public"."fbposthistories" WHERE "dateCreated" > current_date - interval '7 days' AND "type" LIKE '%manual%' GROUP BY producthist_id;



--Total Product Created
SELECT count(*) FROM "public"."products" WHERE "dateCreated" > current_date - interval '7 days';
--Total Product Draft
SELECT count(*) FROM "public"."products" WHERE "dateCreated" > current_date - interval '7 days' AND "status" LIKE '%draft%' ;
--Total Product Inactive
SELECT count(*) FROM "public"."products" WHERE "dateCreated" > current_date - interval '7 days' AND "status" LIKE '%inactive%' ;
--Total Product Publish
--Total Product Active
SELECT count(*) FROM "public"."products" WHERE "dateCreated" > current_date - interval '7 days' AND "status" LIKE '%active%';

--LOAN

--Total Loan drafted
SELECT count(*) FROM "public"."base_applications" WHERE "created_at" > current_date - interval '7 days' AND "status" LIKE '%draft%';
--Total Loan Submitted
SELECT count(*) FROM "public"."base_applications" WHERE "created_at" > current_date - interval '7 days' AND "status" LIKE '%sent%';
--Total Loan Rejected
SELECT count(*) FROM "public"."base_applications" WHERE "created_at" > current_date - interval '7 days' AND "status" LIKE '%rejected%';
--Total Loan Approved
SELECT count(*) FROM "public"."base_applications" WHERE "created_at" > current_date - interval '7 days' AND "status" LIKE '%approved%';
