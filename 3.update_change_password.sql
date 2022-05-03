CREATE PROCEDURE [dbo].[Customer_ChangePassword]
	@Email nvarchar(350),
	@Password nvarchar(350),
	@NewPassword nvarchar(350),
	@Output int output
AS
BEGIN
	IF(NOT Exists (SELECT TOP 1 Id FROM Customer WHERE Email = @Email And [Password] = @Password))
		SELECT @Output = -1;
	ELSE 
	BEGIN
		UPDATE dbo.Customer
		SET Password = @NewPassword
		WHERE Email = @Email;

		SELECT @Output = 1;
	END
END
GO
